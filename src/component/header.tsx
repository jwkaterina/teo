import { Reactish } from "../reactish";
import { ScrollToHomeContext, OpenPageContext, OpenState } from "../context";
import "./header.css";

export const Header = (props: any) => {

    const {scrollToHome, setScrollToHome} = Reactish.useContext(ScrollToHomeContext);
    const {openState} = Reactish.useContext(OpenPageContext);
    const [txtElementRef] = Reactish.useRef<HTMLElement>();

    if(scrollToHome) {
        setScrollToHome(false);
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
    
    setTimeout(() => Typing(txtElementRef.current).type(), 0);

    const Typing = (element: HTMLElement) => {

        const words: string[] = JSON.parse(element.getAttribute('data-words'));       
        let txt: string = '';
        let wordIndex: number = 0;
        const wait: number = parseInt(element.getAttribute('data-wait'), 10);
        let isDeleting: boolean = false;
    
        const type = () => {
            const current: number = wordIndex % words.length;
            const fullTxt: string = words[current];
        
            if (isDeleting) {
                txt = fullTxt.substring(0, txt.length - 1);
            } else {
                txt = fullTxt.substring(0, txt.length + 1);
            }
            element.innerHTML = `<span class="txt">${txt}</span>`;
            let typeSpeed: number = 150;
            if (isDeleting) {
                typeSpeed /= 2;
            }
            if (!isDeleting && txt === fullTxt) {
                typeSpeed = wait;
                isDeleting = true;
            } else if (isDeleting && txt === '') {
                isDeleting = false;
                wordIndex++;
                typeSpeed = 500;
            }
        
            setTimeout(() => type(), typeSpeed);
        }

        return { type }
    }

    return <header >
        <div id="header" class={evaluateClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")}>
            <div id="header-content">
                <h1 id="Heading">Theodor</h1>
                <p class="lead">I am <span ref={txtElementRef} class="txt-type" data-wait="3000" data-words='["a cat.", "an adventurer.", "a meat lover."]'></span></p>
                <a onclick={() => setScrollToHome(true)}
                class="btn-start"></a>
            </div>
        </div>
    </header>
}