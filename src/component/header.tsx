import { Reactish } from "../reactish";
import { ScrollToHomeContext, OpenPageContext, OpenState } from "../context";
import "./header.css";

export const Header = (props: any) => {

    const {scrollToHome, setScrollToHome} = Reactish.useContext(ScrollToHomeContext);
    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);

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

    Reactish.useEffect([], () => {
        Typing().type()
    });

    const Typing = () => {
        const txtElement = document.querySelector('.txt-type');
        const words: string[] = JSON.parse(txtElement.getAttribute('data-words'));       
        let txt: string = '';
        let wordIndex: number = 0;
        const wait: number = parseInt(txtElement.getAttribute('data-wait'), 10);
        let isDeleting: boolean = false;
    
        const type = () => {
            const current: number = wordIndex % words.length;
            const fullTxt: string = words[current];
        
            if (isDeleting) {
                txt = fullTxt.substring(0, txt.length - 1);
            } else {
                txt = fullTxt.substring(0, txt.length + 1);
            }
            txtElement.innerHTML = `<span class="txt">${txt}</span>`;
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

    const onAnimationEnd = () => {
        if(openState == OpenState.OPENING) {
            setOpenState(OpenState.OPEN);
        }
        if(openState == OpenState.CLOSING) {
            setOpenState(OpenState.CLOSED);
            // setTypePreview("");
        }
    }

    return <header >
        <div id="header" class={evaluateClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")} onanimationend={onAnimationEnd}>
            <div id="header-content">
                <h1 id="Heading">Theodor</h1>
                <p class="lead">I am <span class="txt-type" data-wait="3000" data-words='["a cat.", "an adventurer.", "a meat lover."]'></span></p>
                <a onclick={() => setScrollToHome(true)}
                class="btn-start"></a>
            </div>
        </div>
    </header>
}