import { Reactish, ReactishEntity } from "../reactish";
import { OpenPageContext, OpenState } from "../context";

import { About } from "./preview-pages/about";
import { Resume } from "./preview-pages/resume";
import { Portfolio } from "./preview-pages/portfolio";
import { Blog } from "./preview-pages/blog";

import "./preview.css"

export const Preview = (): ReactishEntity => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);

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

    let textClass: string = "";
        if(openState == OpenState.OPENING || openState == OpenState.CLOSING || openState == OpenState.CLOSED) {
            textClass = "hide-text"
        } else if(openState == OpenState.EFFECT) {
            textClass = "animate-text"
        } else {if(openState == OpenState.OPEN)
            textClass = "keep-text"
        }


    const onAnimationEnd = () => {
        if(openState == OpenState.EFFECT) {
            setOpenState(OpenState.OPEN);
        }
    }

    return <section id="preview" class={(openState === OpenState.OPEN || openState === OpenState.EFFECT) ? "show" : ""}>
        <div id="book-top" class={evaluateOpenClass("animate-top", "animate-top-mobile", "animate-top-reverse", "animate-top-reverse-mobile")}></div>
        <div id="book-bottom" class={evaluateOpenClass("animate-bottom", "animate-bottom-mobile", "animate-bottom-reverse", "animate-bottom-reverse-mobile")}></div>
        <div id="book-container">
            <About textClass={textClass} onAnimationEnd={onAnimationEnd}/>
            <Resume textClass={textClass} onAnimationEnd={onAnimationEnd}/>
            <Portfolio textClass={textClass} onAnimationEnd={onAnimationEnd}/>
            <Blog textClass={textClass} onAnimationEnd={onAnimationEnd}/>
        </div>
    </section>
}