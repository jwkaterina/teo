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

interface HTMLElementOwner {
    current: HTMLElement | Text | null;
}

interface DomOrReactishComponent {
    ref: Ref<HTMLElement | Text>;
    entity: ReactishEntity;
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

const createMultipleDOM = (components: TraversedComponent[]): (HTMLElement | Text)[] => {
    return components.map(component => createSingleDOM(component));
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
const isRef = (key: string) => key === 'ref';
const isInnerHTML = (key: string) => key === 'dangerouslySetInnerHTML';
const isFunction = (value: any) => typeof value === 'function';

const updateDOM = (dom: HTMLElement | Text, props: any) => {
    Object.entries(props || {}).forEach(([name, value]) => {
        if (isEvent(name) && name.toLowerCase() in window) {
            if(isFunction(value)) {
                const eventName = name.toLowerCase().substring(2);
                const callback = value as EventListenerOrEventListenerObject;
                dom.addEventListener(eventName, callback);
            } else {
                console.error(`Cannot add ${name} listener. Provided callback is not a function:`, value);
            }
        } else if(isRef(name)) {
            (value as HTMLElementOwner).current = dom;
        } else if(isInnerHTML(name)) {
            const innerHTML = value as DomOrReactishComponent;
            if(innerHTML.ref.current) {
                dom.appendChild(innerHTML.ref.current);
            } else {
                const entity = innerHTML.entity;
                if(Array.isArray(entity)) {
                    const traversedEntity = traverseMultiple(entity);
                    appendChild(dom, traversedEntity);
                } else {
                    const traversedEntity = traverseSingle(entity);
                    appendChild(dom, traversedEntity);
                }
            }
        } else {
            if(dom.nodeType != Node.TEXT_NODE) {
                (dom as HTMLElement).setAttribute(name, value.toString());
            }
        }
    });
    return;
}

const appendChild = (parent: HTMLElement | Text, childEntity: TraversedEntity) => {
    if(Array.isArray(childEntity)) {
        //recursion
        const children = createMultipleDOM(childEntity);
        for (const child of children) {
            if(isFragment(child)) {
                (parent as HTMLElement).append(...(child as HTMLElement).childNodes);
            } else {
                parent.appendChild(child);
            }
        }
    } else {
        const child = createSingleDOM(childEntity);
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
let virtualDOM: ReactishEntity;

/**
 * Invoked by main.tsx to supply the root element and component tree (which is virtualDOM).
 * @param root A parent dom elemet to inject our rerendered HTML Elements into
 * @param component The tree of our application components (virtualDOM). Gonna be the subject of multiple running.
 */
const setVirtualDOM = (root: HTMLElement, component: ReactishEntity) => {
    _root = root;
    virtualDOM = component;
}

/**
 * Rerenders the DOM by traversing and rerunning the tree of virtualDOM.
 */
const renderWithState = (state: any[]) => {

    const stateSnapshot = JSON.stringify(state);
        if(stateSnapshot === _state) {
            return
        }

        // console.log("===rerendering");
        // console.log("old state: ", _state);
        // console.log("new state: ", stateSnapshot);
        _state = stateSnapshot;

        //traversing and rerunning the tree of the application components
        let traverseComponents: TraversedComponent[];
        if(Array.isArray(virtualDOM)) {
            traverseComponents = traverseMultiple(virtualDOM);
        } else {
            traverseComponents = traverseMultiple([virtualDOM])
        }

        //preparing new dom
        const domElements: (HTMLElement | Text)[] = createMultipleDOM(traverseComponents);

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
}

export const Reactish = (() => {
    let stateIdx = 0;
    let refIdx = 0;
    let effectIdx = 0;
    let memoIdx = 0;
    let contextIdx = 0;
    const state: any[] = [];
    const refs: any[] = [];
    const effectDependency: any[] = [];
    const memoDependency: any[] = [];
    const memoState: any[] = [];
    const contexts: any[] = [];

    const workLoop = () => {
        stateIdx = 0;
        refIdx = 0;
        effectIdx = 0;
        memoIdx = 0;
        contextIdx = 0;
        renderWithState(state);
        setTimeout(workLoop, 300);
    }

    setTimeout(workLoop, 0);

    const useState = <T>(initVal: T): [T, (newVal: T) => void] => {
        const stateIndex: number = stateIdx;
        let currentState: any = state[stateIndex] ?? initVal;

        // console.log(`currentState at index: ${stateIndex} `, state[stateIndex]);

        const setState = (newVal: T): void => {
            state[stateIndex] = newVal;
        }
        stateIdx++;
        return [currentState, setState];
    }

    const useRef = <T>(initVal: T = null): [Ref<T>, (newVal: T) => void] => {
        const refIndex: number = refIdx;
        let currentRef: any = refs[refIndex] ?? {current: initVal};

        const setVal = (newVal: T): void => {
            const ref: any = refs[refIndex];
            if(ref) {
                ref.current = newVal;
                return;
            }
            refs[refIndex] = {current: newVal};
        }
        refIdx++;
        return [currentRef, setVal];
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

    const useMemo = (dependencies: any[], cb: ()=>any) => {
        const currentIndex: number = memoIdx;
        memoIdx++;
        const oldDeps = memoDependency[currentIndex];
        let hasChanged: boolean = true;
        if(oldDeps) {
            hasChanged = dependencies.some((dep: any, i: number) => {
                return !Object.is(dep, oldDeps[i]);
            })
        }

        if(hasChanged) {
            memoState[currentIndex] = cb();
        }

        memoDependency[currentIndex] = dependencies;

        return memoState[currentIndex];
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

    return {
        render: setVirtualDOM,
        useState,
        useRef,
        useEffect,
        useMemo,
        createContext,
        useContext
    }
})();

export interface Ref<T> {
    current: T;
}

export interface Context<T> {
    Provider: (props: ContextProperty<T>, ...children: any[]) => ReactishEntity;
    contextIndex: number;
}

interface ContextProperty<T> {
    value: T
}