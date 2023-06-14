/** @jsx parseJSX */
import { Reactish, parseJSX } from "../reactish";

import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";

import "./preview.css"

export const Preview = (props: PreviewProps) => {

    const [isOpenAbout, setOpenAbout] = Reactish.useState(false);
    const [isOpenResume, setOpenResume] = Reactish.useState(false);
    const [isOpenPortfolio, setOpenPortfolio] = Reactish.useState(false);
    const [isOpenBlog, setOpenBlog] = Reactish.useState(false);
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
    if(!props.isOpen) {
        return <span/>
    }

    switch(props.isType) {
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

export interface PreviewProps {
    isOpen: boolean,
    isType: string
}