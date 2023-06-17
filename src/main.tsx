import { App } from "./app";
import { Reactish } from "./reactish";

const root = document.getElementById('root');

Reactish.render(root, <App name="foo" />);