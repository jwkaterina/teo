export const Reactish = (() => {
    let index: number = 0;
    const hooks: any[] = [];

    const useState = <T>(initVal: T): [T, (newVal: T) => void] => {

        const state: any = hooks[index] || initVal;
        const stateIndex: number = index;

        const setState = (newVal: T): void => {
            hooks[stateIndex] = newVal;
        }
        index++;
        return [state, setState];
    }

    const useEffect = (dependencies: any[], cb: ()=>void) => {
        const oldDeps = hooks[index];
        let hasChanged: boolean = true;
        if(oldDeps) {
            hasChanged = dependencies.some((dep: any, i: number) => {
                return !Object.is(dep, oldDeps[i]);
            })
        }

        if(hasChanged) {
            setTimeout(cb, 0);
        }

        hooks[index] = dependencies;

        index++;
    }


    const render = (component: HTMLElement, selector?: string) => {
        const root = document.getElementById("root");
        const oldComponent = root.querySelector(selector);
        if (oldComponent) {
            oldComponent.remove();
        }
        root.appendChild(component);
        index = 0;
    }

    return {
        render,
        useState,
        useEffect
    }
})();