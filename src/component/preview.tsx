/** @jsx parseJSX */
import { Reactish, ReactishComponent, parseJSX } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext } from "../context";

import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";

import "./preview.css"

export const Preview = () => {

    const [isOpenAbout, setOpenAbout] = Reactish.useState(false);
    const [isOpenResume, setOpenResume] = Reactish.useState(false);
    const [isOpenPortfolio, setOpenPortfolio] = Reactish.useState(false);
    const [isOpenBlog, setOpenBlog] = Reactish.useState(false);

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const typePreview = Reactish.useContext(TypePreviewContext);

    const evaluateClass = (openingClass: string, closingClass: string): string => {
        if(openState == OpenState.CLOSED) {
            return openingClass
        } else if(openState == OpenState.OPEN) {
            return closingClass
        } 
        return ""
    }

    // const closePage = (page: string) => {
    //     document.getElementById(page).querySelector('p').classList.add('animate-text-reverse');
    //     setTimeout(() => {
    //         document.getElementById(page).querySelector('.book-container').classList.remove('show');
    //         document.getElementById(page).querySelector('p').classList.remove('animate-text-reverse');
    //         document.querySelectorAll('.home-flex').forEach(function(item) {
    //             item.classList.remove('on-show'); // Bring home elements back to normal
    //         })
    //         document.querySelector('body').style.overflow = 'auto';
    //         BookAnimation().closeAnimation();
    //     },200);
    // }

    // return { closePage }


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