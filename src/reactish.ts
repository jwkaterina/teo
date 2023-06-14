/**
 * a tree of function components
 */
export interface ReactishComponent {
    tag: string | Function;
    props: any;
    children: ReactishChildren;
}

/**
 * a tree of html components as a result of function component evaluations
 */
export interface TraversedComponent {
    tag: string;
    props: any;
    traversedChildren: TraversedChildren;
    children: ReactishChildren;
}

export type ReactishEntity = ReactishComponent | ReactishComponent[];
export type ReactishChildren = ReactishComponent[] | ReactishComponent[][];
export type TraversedEntity = TraversedComponent | TraversedComponent[];
export type TraversedChildren = TraversedComponent[] | TraversedComponent[][];

/** 
 * Pragma function.
 * This is the entry point.
 * jsx plugin parses jsx and calls this function.
 * Saves jsx as a tree.
 * @param tag function | html tag as a string
 * @param props 
 * @param children array of entities of type: object | string
 * @returns a tree of {@link ReactishComponent}
 */
export const parseJSX = (tag: any, props: any, ...children: any[]): ReactishComponent => {
    return {
        tag: tag,
        props: props,
        children: children.map((child) => {
            if(typeof child === "object") {
                return child
            }

            return wrapStringIntoComponent(child)
        })
    };
}

const TEXT_ELEMENT = "TEXT_ELEMENT";

const wrapStringIntoComponent = (text: string): ReactishComponent => {
    return {
        tag: TEXT_ELEMENT,
        props: {componentValue: text},
        children: []
    };
}

const traverseMultiple = (components: ReactishComponent[]): TraversedComponent[] => {
    return components.map((component) => traverseSingle(component))
}

const traverseSingle = (component: ReactishComponent): TraversedComponent => {
    const traversed: TraversedComponent = reevaluate(component);
    traversed.children.forEach((cmp, idx) => {
        if(Array.isArray(cmp)) {
            traversed.traversedChildren[idx] = traverseMultiple(cmp);
        } else {
            traversed.traversedChildren[idx] = traverseSingle(cmp);
        } 
    });

    return traversed;
}

const reevaluate = (component: ReactishComponent): TraversedComponent => {
    const newTraversed: TraversedComponent = createTraverse();

    const tag = component.tag;
    if(typeof tag === "function") {
        component = runReactishComponent(tag, component.props, component.children);

    }
    newTraversed.tag = component.tag as string;
    newTraversed.props = component.props;
    newTraversed.children = component.children;
    return newTraversed 
}

const createTraverse = (): TraversedComponent => {
    return {
        tag: "",
        props: {},
        children: [],
        traversedChildren: []
    }
}

const runReactishComponent = (fn: Function, props: any, children: ReactishChildren): ReactishComponent => {
    let reactish: ReactishComponent = fn(props, ...children);
    if(typeof reactish.tag === 'function') {
        //recursive:
        reactish = runReactishComponent(reactish.tag, reactish.props, reactish.children);
    }
    return reactish;
}

const createMultipleDOM = (components: TraversedComponent[]): (HTMLElement | Text)[] => {
    return components.map(component => createSingleDOM(component))
}

const createSingleDOM = (parent: TraversedComponent): HTMLElement | Text => {
    const dom = createHTMLElement(parent);
    updateDOM(dom, parent.props);
    if(parent.traversedChildren) {
        for (const childEntity of parent.traversedChildren) {
            //recursion
            appendChild(dom, childEntity);
        }
    }

    return dom
}

const createHTMLElement = (component: TraversedComponent): HTMLElement | Text => {
    if(component.tag === TEXT_ELEMENT) {
        return document.createTextNode(component.props.componentValue);
    }

    return document.createElement(component.tag);
}

const isEvent = (key: string) => key.startsWith('on');

const updateDOM = (dom: HTMLElement | Text, props: any) => {
    Object.entries(props || {}).forEach(([name, value]) => {
        if (isEvent(name) && name.toLowerCase() in window) {
            const eventName = name.toLowerCase().substring(2);
            const callback = value as EventListenerOrEventListenerObject;
            dom.addEventListener(eventName, callback);
        } else {
            if(dom.nodeType != Node.TEXT_NODE) {
                (dom as HTMLElement).setAttribute(name, value.toString());
            }
        }
    });
}

const appendChild = (parent: HTMLElement | Text, childEntity: TraversedEntity) => {
    if(Array.isArray(childEntity)) {
        //recursion
        const children = createMultipleDOM(childEntity);
        for (const child of children) {
            parent.appendChild(child);
        }
    } else {
        parent.appendChild(createSingleDOM(childEntity));
    }
}

let _hooks: string;
let _root: HTMLElement;
let _cmp: ReactishEntity;

const renderWithHooks = (hooks: any[]) => {
    //first  time must be invoked by main which must supply root and component
    const render = (root: HTMLElement = _root, component: ReactishEntity = _cmp) => {
        const hooksSnapshot = JSON.stringify(hooks);
        if(hooksSnapshot === _hooks) {
            return
        }
        _root = root;
        _cmp = component;

        console.log(hooksSnapshot);
        _hooks = hooksSnapshot;

        let traverseComponents: TraversedComponent[];
        if(Array.isArray(_cmp)) {
            traverseComponents = traverseMultiple(_cmp);
        } else {
            traverseComponents = traverseMultiple([_cmp])
        }

        const domElements: (HTMLElement | Text)[] = createMultipleDOM(traverseComponents);
        while(_root.firstChild) {
            _root.removeChild(_root.firstChild);
        }
        for (const dom of domElements) {
            _root.appendChild(dom);
        }
    }

    return render
}

export const Reactish = (() => {
    let idx: number = 0;
    let contextIdx = 0;
    const hooks: any[] = [];
    const contextHooks: any[] = [];

    const workLoop = () => {
        idx = 0;
        const render = renderWithHooks(hooks);
        render();
        setTimeout(workLoop, 300);
    }

    setTimeout(workLoop, 0);

    const useState = <T>(initVal: T): [T, (newVal: T) => void] => {

        const state: any = hooks[idx] || initVal;
        const stateIndex: number = idx;

        const setState = (newVal: T): void => {
            hooks[stateIndex] = newVal;
        }
        idx++;
        return [state, setState];
    }

    const useEffect = (dependencies: any[], cb: ()=>void) => {
        const oldDeps = hooks[idx];
        let hasChanged: boolean = true;
        if(oldDeps) {
            hasChanged = dependencies.some((dep: any, i: number) => {
                return !Object.is(dep, oldDeps[i]);
            })
        }

        if(hasChanged) {
            setTimeout(cb, 0);
        }

        hooks[idx] = dependencies;

        idx++;
    }

    const createContext = <T>(defaultVal: T): Context<T> => {
        const contextIndex = contextIdx;
        contextHooks[contextIndex] = defaultVal;

        const Provider = (props: ContextProperty<T>, ...children: any[]): ReactishEntity => {
            contextHooks[contextIndex] = props.value;

            return {
                tag: 'span',
                props,
                children
            }
        }
        contextIdx++

        return {
            Provider,
            contextIndex
        }
    }

    const useContext = <T>(context: Context<T>): T => contextHooks[context.contextIndex] as T;

    const render = renderWithHooks(hooks);

    return {
        render: render,
        useState,
        useEffect,
        createContext,
        useContext
    }
})();

export interface Context<T> {
    Provider: (props: ContextProperty<T>, ...children: any[]) => ReactishEntity;
    contextIndex: number;
}

interface ContextProperty<T> {
    value: T
}