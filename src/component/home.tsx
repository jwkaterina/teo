import { Reactish } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext, ScrollToHomeContext } from "../context";

import "./home.css"

export const Home = () => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {scrollToHome} = Reactish.useContext(ScrollToHomeContext);
    const {setTypePreview} = Reactish.useContext(TypePreviewContext);

    const scrollIntoView = (element: HTMLElement) => {
        Reactish.useEffect([openState], () => {
            if(openState == OpenState.OPENING) {
                element.scrollIntoView({behavior: "instant"});
            }
        });
        if(scrollToHome) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    const evaluateClass = (closedClass: string, openingClass: string, openClass: string, closingClass: string): string => {
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

    const onHomeClick = (type: string) => {
        if(openState == OpenState.CLOSED) {
            setOpenState(OpenState.OPENING);
            setTypePreview(type);
        } 
        if(openState == OpenState.OPEN) {
            setOpenState(OpenState.CLOSING);
            setTypePreview("");
        }
    }

    const onAnimationEnd = () => {
        if(openState == OpenState.OPENING) {
            setOpenState(OpenState.OPEN);
        }
        if(openState == OpenState.CLOSING) {
            setOpenState(OpenState.CLOSED);
        }
    }

    return <section id="home" apply={scrollIntoView} class={evaluateClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")}>
            <div id="home-main">
                <div id="home-left" class={evaluateClass("", "animate-left", "keep-left", "animate-left-reverse")} onanimationend={onAnimationEnd}>
                    <div id="home-about" class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick("about")}>
                        <div class="home-content">
                            <i class="fas fa-cat fa-2x"></i>
                            <h2>about me</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            <button class="btn upper">View more</button>
                        </div>
                    </div>
                    <div id="home-portfolio" class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick("portfolio")}>
                        <div class="home-content">
                            <i class="fas fa-briefcase fa-2x"></i>
                            <h2>portfolio</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            <button class="btn upper">View more</button>
                        </div>
                    </div>
                </div>
                <div id="home-right" class={evaluateClass("", "animate-right", "keep-right", "animate-right-reverse")}>
                    <div id="home-resume" class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick("resume")}>
                        <div class="home-content">
                            <i class="fas fa-id-card fa-2x"></i>
                            <h2>resume</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                            </p>
                            <button class="btn upper">View more</button>
                        </div> 
                    </div>
                    <div id="home-blog" class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick("blog")}>
                        <div class="home-content">
                            <i class="fas fa-book fa-2x"></i>
                            <h2>blog</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button class="btn upper">View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}