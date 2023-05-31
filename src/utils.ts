const createElement = (tag: any, props: any, ...children: any[]) => {
    if(typeof tag === 'function') {
        return tag(props, ...children);
    }

    const element = document.createElement(tag as string);

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith("on") && name.toLowerCase() in window) {
            const eventName = name.toLowerCase().substring(2);
            const callback = value as EventListenerOrEventListenerObject;
            element.addEventListener(eventName, callback);
        } else {
            element.setAttribute(name, value.toString());
        }
    });

    children.forEach(child => {
        appendChild(element, child);
    });

    return element;
}

const appendChild = (parent: HTMLElement, child: any) => {
    if (Array.isArray(child)) {
        child.forEach(nestedChild => appendChild(parent, nestedChild));
    } else {
        parent.appendChild(child.nodeType ? child : document.createTextNode(child));
    }
};

const createFragment = (props: any, ...children: any[]) => {
    return children;
};
const renderWithHooks = (hooks: any[]) => {
    //TODO
    console.log("todo");
}

export {
    renderWithHooks,
    createElement,
    createFragment
}