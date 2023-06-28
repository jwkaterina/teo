import { Reactish } from "../reactish";
import { OpenPageContext, OpenState, ScrollToHomeContext } from "../context";
import { HomeGrid } from "./home-grid";

import "./home.css"

export const Home = () => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {scrollToHome} = Reactish.useContext(ScrollToHomeContext);
    const [homeRef] = Reactish.useRef<HTMLElement>();

    Reactish.useEffect([openState], () => {
        const media = window.matchMedia("(max-width: 1000px)");

        if(openState == OpenState.OPENING && !media.matches) {
            homeRef.current.scrollIntoView({behavior: "instant"});
        }
    });

    Reactish.useEffect([scrollToHome], () => {
        if(scrollToHome) {
            homeRef.current.scrollIntoView({behavior: "smooth"});
        }
    });

    const evaluateOpenClass = (closedClass: string, openingClass: string, openClass: string, closingClass: string): string => {
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

    const evaluateOpenClassMobile = (closedClassMobile: string, openingClassMobile: string, openClassMobile: string, closingClassMobile: string): string => {
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


    const openAnimationEnd = () => {
        if(openState == OpenState.OPENING) {
            setOpenState(OpenState.OPEN);
        }
        if(openState == OpenState.CLOSING) {
            setOpenState(OpenState.CLOSED);
        }
    }

    return <section id="home" ref={homeRef} class={evaluateOpenClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")} onanimationend={openAnimationEnd}>
        <div id="home-main">
            <div id="home-left" class={evaluateOpenClass("", "animate-left", "keep-left", "animate-left-reverse")} onanimationend={openAnimationEnd}>
                <HomeGrid id="home-about" iconClass="fas fa-user fa-2x" header="about" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="about"/>
                <HomeGrid id="home-portfolio" iconClass="fas fa-briefcase fa-2x" header="portfolio" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="portfolio"/>
                </div>
            <div id="home-right" class={evaluateOpenClass("", "animate-right", "keep-right", "animate-right-reverse")}>
                <HomeGrid id="home-resume" iconClass="fas fa-file-alt fa-2x" header="resume" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="resume"/>
                <HomeGrid id="home-blog" iconClass="fas fa-blog fa-2x" header="blog" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing." typePreview="blog"/>
            </div>
        </div>
    </section>
}