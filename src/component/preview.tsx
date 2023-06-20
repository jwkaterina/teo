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

    const evaluateClass = (openingClass: string, openingClassMobile: string, closingClass: string, closingClassMobile: string): string => {
        const media = window.matchMedia("(max-width: 1000px)");
        if(openState == OpenState.OPENING && !media.matches) {
            return openingClass
        } else if(openState == OpenState.OPENING && media.matches) {
            return openingClassMobile
        } else if(openState == OpenState.CLOSING && !media.matches) {
            return closingClass
        } else if(openState == OpenState.CLOSING && media.matches) {
            return closingClassMobile
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
        <div id="book-top" class={evaluateClass("animate-top", "animate-top-mobile", "animate-top-reverse", "animate-top-reverse-mobile")}></div>
        <div id="book-bottom" class={evaluateClass("animate-bottom", "animate-bottom-mobile", "animate-bottom-reverse", "animate-bottom-reverse-mobile")}></div>
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