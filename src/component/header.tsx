import { Reactish } from "../reactish";
import { ScrollToHomeContext } from "../context";
import { Auth } from "./auth";

import "./header.css";

export const Header = ({ openClassMobile }) => {

    const {scrollToHome, setScrollToHome} = Reactish.useContext(ScrollToHomeContext);
    const [txtElementRef] = Reactish.useRef<HTMLElement>();
    //example of how to use useRef to store a value outside the state.
    // const [clicksRef, setClicks] = Reactish.useRef(0);

    if(scrollToHome) {
        setScrollToHome(false);
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
        <div id="header" class={openClassMobile}>
            <div id="header-content">
                <Auth/>
                <h1 id="Heading">Theodor 
                {/* ({clicksRef.current}) */}
                </h1>
                <p class="lead">I am <span ref={txtElementRef} class="txt-type" data-wait="3000" data-words='["a cat.", "an adventurer.", "a meat lover."]'></span></p>
                <a onclick={() => {
                    // setClicks(clicksRef.current + 1);
                    setScrollToHome(true);
                }}
                class="btn-start"></a>
            </div>
        </div>
    </header>
}