
const Reactish = (() => {
    let index: number = 0;
    let states: any[] = [];

    function useState<T>(initVal: T): [T, (newVal: T) => void] {

        const state: any = states[index] || initVal;
        const stateIndex: number = index;

        const setState = (newVal: T): void => {
            states[stateIndex] = newVal;
            console.log(states);
        }
        index++;
        return [state, setState];
    }


    function render(component: HTMLElement, selector?: string) {
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
        useState
    }
})();

export {
    Reactish
}