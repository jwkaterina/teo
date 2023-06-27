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

    const evaluateOpenClass = (openingClass: string, openingClassMobile: string, closingClass: string, closingClassMobile: string): string => {
        
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
        if(openState != OpenState.OPEN) return <></>
        switch(type) {
            case "about":
                return <About/>
            case "resume":
                return <Resume/>
            case "portfolio":
                return <Portfolio/>
            case "blog":
                return <Blog/>
            default: return <></>
        }
    }

    if(openState == OpenState.CLOSED) {
        return <></>
    } 

    return <section id="preview">
        <div id="book-top" class={evaluateOpenClass("animate-top", "animate-top-mobile", "animate-top-reverse", "animate-top-reverse-mobile")}></div>
        <div id="book-bottom" class={evaluateOpenClass("animate-bottom", "animate-bottom-mobile", "animate-bottom-reverse", "animate-bottom-reverse-mobile")}></div>
        <div id="book-container">
            {
                getBookContent(typePreview)
            }
        </div>
    </section>
}