import { Reactish } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext, ScrollToHomeContext } from "../context";
import { HomeGrid } from "./home-grid";

import "./home.css"

export const Home = () => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {scrollToHome} = Reactish.useContext(ScrollToHomeContext);

    const scrollIntoView = (element: HTMLElement) => {
        Reactish.useEffect([openState], () => {
            const media = window.matchMedia("(max-width: 1000px)");

            if(openState == OpenState.OPENING && !media.matches) {
                element.scrollIntoView({behavior: "instant"});
            }
        });
        if(scrollToHome) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    const evaluateClass = (closedClass: string, openingClass: string, openClass: string, closingClass: string): string => {
        const media = window.matchMedia("(max-width: 1000px)");
        if(media.matches) {
            return ""
        }
        if(openState == OpenState.CLOSED) {
            return closedClass
        } else if(openState == OpenState.OPENING) {
            return openingClass
        } else if(openState == OpenState.OPEN) {
            return openClass
        } else {
            return closingClass
        }
    }

    const evaluateClassMobile = (closedClassMobile: string, openingClassMobile: string, openClassMobile: string, closingClassMobile: string): string => {
        const media = window.matchMedia("(max-width: 1000px)");
        if(!media.matches) {
            return ""
        }
        if(openState == OpenState.CLOSED) {
            return closedClassMobile
        } else if(openState == OpenState.OPENING) {
            return openingClassMobile
        } else if(openState == OpenState.OPEN) {
            return openClassMobile
        } else {
            return closingClassMobile
        }
    }


    const onAnimationEnd = () => {
        if(openState == OpenState.OPENING) {
            setOpenState(OpenState.OPEN);
        }
        if(openState == OpenState.CLOSING) {
            setOpenState(OpenState.CLOSED);
            // setTypePreview("");
        }
    }

    return <section id="home" apply={scrollIntoView} class={evaluateClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")}>
            <div id="home-main">
                <div id="home-left" class={evaluateClass("", "animate-left", "keep-left", "animate-left-reverse")} onanimationend={onAnimationEnd}>
                    <HomeGrid id="home-about" iconClass="fas fa-user fa-2x" header="about" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="about"/>
                    <HomeGrid id="home-portfolio" iconClass="fas fa-briefcase fa-2x" header="portfolio" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="portfolio"/>
                    </div>
                <div id="home-right" class={evaluateClass("", "animate-right", "keep-right", "animate-right-reverse")}>
                    <HomeGrid id="home-resume" iconClass="fas fa-file-alt fa-2x" header="resume" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="resume"/>
                    <HomeGrid id="home-blog" iconClass="fas fa-blog fa-2x" header="blog" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="blog"/>
                </div>
            </div>
        </section>
}