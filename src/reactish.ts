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

type HTMLElementFunction = (element: HTMLElement)=>void;

interface DOMFunction {
    func: HTMLElementFunction,
    element: HTMLElement
}

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

const FRAGMENT_ELEMENT = "FRAGMENT_ELEMENT";
const isFragment = (element: HTMLElement | Text): boolean => element.nodeType != Node.TEXT_NODE && (element as HTMLElement).tagName === FRAGMENT_ELEMENT;

export const parseJSXFragment = (props: any, ...children: any[]): ReactishComponent => {
    return parseJSX(FRAGMENT_ELEMENT, props, children);
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

const createMultipleDOM = (components: TraversedComponent[], domFunctions: DOMFunction[]): (HTMLElement | Text)[] => {
    return components.map(component => createSingleDOM(component, domFunctions));
}

const createSingleDOM = (parent: TraversedComponent, domFunctions: DOMFunction[]): HTMLElement | Text => {
    const dom = createHTMLElement(parent);
    updateDOM(dom, parent.props, domFunctions);

    if(parent.traversedChildren) {
        for (const childEntity of parent.traversedChildren) {
            //recursion
            appendChild(dom, childEntity, domFunctions);
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
const isApply = (key: string) => key === 'apply';
const isFunction = (value: any) => typeof value === 'function';

const updateDOM = (dom: HTMLElement | Text, props: any, domFunctions: DOMFunction[]) => {
    Object.entries(props || {}).forEach(([name, value]) => {
        if (isEvent(name) && name.toLowerCase() in window) {
            if(isFunction(value)) {
                const eventName = name.toLowerCase().substring(2);
                const callback = value as EventListenerOrEventListenerObject;
                dom.addEventListener(eventName, callback);
            } else {
                console.error(`Cannot add ${name} listener. Provided callback is not a function:`, value);
            }
        } else if(isApply(name)) {
            if(dom.nodeType != Node.TEXT_NODE && isFunction(value)) {
                domFunctions.push({func: value as HTMLElementFunction, element: dom as HTMLElement});
            }
        } else {
            if(dom.nodeType != Node.TEXT_NODE) {
                (dom as HTMLElement).setAttribute(name, value.toString());
            }
        }
    });
    return;
}

const appendChild = (parent: HTMLElement | Text, childEntity: TraversedEntity, domFunctions: DOMFunction[]) => {
    if(Array.isArray(childEntity)) {
        //recursion
        const children = createMultipleDOM(childEntity, domFunctions);
        for (const child of children) {
            if(isFragment(child)) {
                (parent as HTMLElement).append(...(child as HTMLElement).childNodes);
            } else {
                parent.appendChild(child);
            }
        }
    } else {
        const child = createSingleDOM(childEntity, domFunctions);
        if(isFragment(child)) {
            (parent as HTMLElement).append(...(child as HTMLElement).childNodes);
        } else {
            parent.appendChild(child);
        }
    }
}

let _state: string;
let _root: HTMLElement;
/**
 * The tree of our Component Functions
 */
let _cmp: ReactishEntity;

const renderWithHooks = (state: any[]) => {
    /**
     * Rerenders the DOM by traversing and rerunning the tree of application components.
     * First time it must be invoked by main.ts to supply the root element and component tree.
     * @param root A parent dom elemet to inject our rerendered HTML Elements into
     * @param component The tree of our application components (gonna be the subject of multiple rerunning)
     */
    const render = (root: HTMLElement = _root, component: ReactishEntity = _cmp) => {
        const stateSnapshot = JSON.stringify(state);
        if(stateSnapshot === _state) {
            return
        }
        _root = root;
        _cmp = component;
        _state = stateSnapshot;

        //traversing and rerunning the tree of the application components
        let traverseComponents: TraversedComponent[];
        if(Array.isArray(_cmp)) {
            traverseComponents = traverseMultiple(_cmp);
        } else {
            traverseComponents = traverseMultiple([_cmp])
        }

        //preparing new dom
        const domFunctions: DOMFunction[] = [];
        const domElements: (HTMLElement | Text)[] = createMultipleDOM(traverseComponents, domFunctions);

        //deleting the old dom
        while(_root.firstChild) {
            _root.removeChild(_root.firstChild);
        }

        //adding the new dom to the root
        for (const dom of domElements) {
            if(isFragment(dom)) {
                _root.append(...dom.childNodes);
            } else {
                _root.appendChild(dom);
            }
        }

        //invoking 'apply' functions on some HTML elements
        for (const domFunction of domFunctions) {
            domFunction.func(domFunction.element);
        }
    }

    return render
}

export const Reactish = (() => {
    let stateIdx: number = 0;
    let effectIdx = 0;
    let contextIdx = 0;
    const state: any[] = [];
    const effectDependency: any[] = [];
    const contexts: any[] = [];

    const workLoop = () => {
        stateIdx = 0;
        const render = renderWithHooks(state);
        render();
        setTimeout(workLoop, 300);
    }

    setTimeout(workLoop, 0);

    const useState = <T>(initVal: T): [T, (newVal: T) => void] => {
        const stateIndex: number = stateIdx;
        let currentState: any = state[stateIndex];

        if(!currentState) {
            state[stateIndex] = initVal;
            currentState = initVal;
        }

        const setState = (newVal: T): void => {
            state[stateIndex] = newVal;
        }
        stateIdx++;
        return [currentState, setState];
    }

    const useEffect = (dependencies: any[], cb: ()=>void) => {
        const oldDeps = effectDependency[effectIdx];
        let hasChanged: boolean = true;
        if(oldDeps) {
            hasChanged = dependencies.some((dep: any, i: number) => {
                return !Object.is(dep, oldDeps[i]);
            })
        }

        if(hasChanged) {
            setTimeout(cb, 0);
        }

        effectDependency[effectIdx] = dependencies;

        effectIdx++;
    }

    const createContext = <T>(defaultVal: T): Context<T> => {
        const contextIndex = contextIdx;
        contexts[contextIndex] = defaultVal;

        const Provider = (props: ContextProperty<T>, ...children: any[]): ReactishEntity => {
            contexts[contextIndex] = props.value;

            return {
                tag: FRAGMENT_ELEMENT,
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

    const useContext = <T>(context: Context<T>): T => contexts[context.contextIndex] as T;

    const render = renderWithHooks(state);

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