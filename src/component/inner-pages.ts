import { BookAnimation } from "./book-animation";

import "./inner-pages.css"

export const Inner = () => {

    const closePage = (page: string) => {
        document.getElementById(page).querySelector('p').classList.add('animate-text-reverse');
        setTimeout(() => {
            document.getElementById(page).querySelector('.book-container').classList.remove('show');
            document.getElementById(page).querySelector('p').classList.remove('animate-text-reverse');
            document.querySelectorAll('.home-flex').forEach(function(item) {
                item.classList.remove('on-show'); // Bring home elements back to normal
            })
            document.querySelector('body').style.overflow = 'auto';
            BookAnimation().closeAnimation();
        },200);
    }

    return { closePage }
}