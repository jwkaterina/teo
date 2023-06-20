import { Reactish, ReactishComponent } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext } from "../context";

import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";

import "./preview.css"

export const Preview = () => {

    const {openState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);

    const evaluateClass = (openingClass: string, closingClass: string): string => {
        if(openState == OpenState.OPENING) {
            return openingClass
        } else if(openState == OpenState.CLOSING) {
            return closingClass
        } 
        return ""
    }

    const getBookContent = (type: string): ReactishComponent => {
        switch(type) {
            case "about":
                return <div>
                    <About isOpen={true}/>
                </div>
            case "resume":
                return <div>
                    <Resume isOpen={true}/>
                </div>
            case "portfolio":
                return <div>
                    <Portfolio isOpen={true}/>
                </div>
            case "blog":
                return <div>
                    <Blog isOpen={true}/>
                </div>
        }
    }

    if(openState == OpenState.CLOSED) {
        return <span/>
    } 

    return <section id="preview">
        <div id="book-top" class={evaluateClass("animate-top", "animate-top-reverse")}></div>
        <div id="book-bottom" class={evaluateClass("animate-bottom", "animate-bottom-reverse")}></div>
        <div id="book-container">
            <a href="" class="btn-close">
                <div class="cross"></div>
            </a>
            {
                getBookContent(typePreview)
            }
        </div>
    </section>
}