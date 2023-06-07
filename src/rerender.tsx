/** @jsx createElement */
import { createElement } from "./utils";
import { App } from "./app";
import { Reactish } from "./reactish";

export const rerender = () => {
    Reactish.render(<App name="foo" />, "#app");
}