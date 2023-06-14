//babel pragma function
/** @jsx parseJSX */
import { App } from "./app";
import { Reactish, parseJSX } from "./reactish";

const root = document.getElementById('root');

Reactish.render(root, 
<App name="foo" />
);