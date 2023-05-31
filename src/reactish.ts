
const Reactish = (() => {
    let index = 0;
    let states = [];

    function useState<T>(initVal: T): [T, (newVal: T) => void] {

        const state = states[index] || initVal;
        const stateIndex = index;

        const setState = (newVal: T) => {
            states[stateIndex] = newVal;
        }
        index++;
        return [state, setState];
    }


    function render(component: HTMLElement) {
        const root = document.getElementById("root");
        const oldComponent = root.querySelector("#comp1");
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