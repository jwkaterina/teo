import { Reactish } from "../reactish";
import { BookAnimation } from "./book-animation";
import { OpenPageContext, OpenState, TypePreviewContext } from "../context";

import "./home.css"

export const Home = () => {
    // const [isOpenPreview, setOpenPreview] = Reactish.useState(false);
    const [typePreview, setType] = Reactish.useState("");
    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);

    const scrollIntoView = (element: HTMLElement) => {
        Reactish.useEffect([openState], () => {
            element.scrollIntoView();
        });
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

    const onHomeClick = (type: string) => {
        if(openState == OpenState.CLOSED) {
            setOpenState(OpenState.OPENING);
            setType(type);
        } 
        if(openState == OpenState.OPEN) {
            setOpenState(OpenState.CLOSING);
            setType("");
        }
    }

    const onAnimationEnd = () => {
        if(openState == OpenState.OPENING) {
            setOpenState(OpenState.OPEN)
        }
        if(openState == OpenState.CLOSING) {
            setOpenState(OpenState.CLOSED)
        }
    }

    const openPage = (page: string) => {
        // document.querySelector('body').style.overflow = 'hidden';
        // document.querySelectorAll('.home-flex').forEach(function(item) {
        //     item.classList.add('dark');
        // })
        BookAnimation().openAnimation();
        setTimeout(() => {
            document.getElementById(page).querySelector('.book-container').classList.add('show');
            document.getElementById(page).querySelector('p').classList.add('animate-text');
        },BookAnimation().duration);
        setTimeout(() => {
            document.getElementById(page).querySelector('p').classList.remove('animate-text');
        },700);
    }
    

    return <TypePreviewContext.Provider value={typePreview}>
        <section id="home" apply={ openState == OpenState.OPENING ? scrollIntoView : null}>
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
    </TypePreviewContext.Provider>
}