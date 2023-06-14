/** @jsx parseJSX */
import { Reactish, parseJSX } from "../reactish";
import "./header.css";

export const Header = (props: any) => {

    Reactish.useEffect([], () => {
        Typing().type()
    });

    const Typing = () => {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));       
        let txt = '';
        let wordIndex = 0;
        const wait = parseInt(txtElement.getAttribute('data-wait'), 10);
        let isDeleting = false;
    
        const type = () => {
            const current = wordIndex % words.length;
            const fullTxt = words[current];
        
            if (isDeleting) {
                txt = fullTxt.substring(0, txt.length - 1);
            } else {
                txt = fullTxt.substring(0, txt.length + 1);
            }
            txtElement.innerHTML = `<span class="txt">${txt}</span>`;
            let typeSpeed = 150;
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
        <div id="header">
            <div id="header-content">
                <h1 id="Heading">Theodor</h1>
                <p class="lead">I am <span class="txt-type" data-wait="3000" data-words='["a cat.", "an adventurer.", "a meat lover."]'></span></p>
                <a href="#home" class="btn-start"></a>
            </div>
        </div>
    </header>
}