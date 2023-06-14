/** @jsx parseJSX */
import { Reactish, parseJSX } from "../reactish";
import { BookAnimation } from "./book-animation";
import { Preview } from "./preview";
import { OpenPageContext } from "../context";

import "./home.css"

export const Home = () => {
    const [isOpenPreview, setOpenPreview] = Reactish.useState(false);
    const [isTypePreview, setType] = Reactish.useState("");
    const {isOpen, setOpen} = Reactish.useContext(OpenPageContext);

    const openPage = (page: string) => {
        // document.querySelector('body').style.overflow = 'hidden';
        // document.querySelectorAll('.home-flex').forEach(function(item) {
        //     item.classList.add('on-show'); // Darken home elements
        // })
        BookAnimation().openAnimation();
        setTimeout(() => {
            document.getElementById(page).querySelector('.book-container').classList.add('show');
            document.getElementById(page).querySelector('p').classList.add('animate-text');
            // document.getElementById(page).querySelector('.book-container').focus();
            // document.getElementById(page).querySelector('.book-container').addEventListener('blur', function() {
            //     closePage(page);
        },BookAnimation().duration);
        setTimeout(() => {
            document.getElementById(page).querySelector('p').classList.remove('animate-text');
        },700);
    }

    return  <section id="home">
        <div id="home-main">
            <div id="home-left" class={isOpen? "animate-left keep-left" : ""}>
                <div id="home-about" class={isOpen? "home-flex on-show" : "home-flex"} onclick={
                    () => {
                        setOpen(true);
                        setOpenPreview(true);
                        setType("about");
                     }
                    }>
                    <div class="home-content">
                        <i class="fas fa-cat fa-2x"></i>
                        <h2>about me</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
                <div id="home-portfolio" class={isOpen? "home-flex on-show" : "home-flex"} onclick={() => {setOpenPreview(true); setType("portfolio")}}>
                    <div class="home-content">
                        <i class="fas fa-briefcase fa-2x"></i>
                        <h2>portfolio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
            </div>
            <div id="home-right" class={isOpen? "animate-right keep-right" : ""}>
                <div id="home-resume" class={isOpen? "home-flex on-show" : "home-flex"} onclick={() => {setOpenPreview(true); setType("resume");}}>
                    <div class="home-content">
                        <i class="fas fa-id-card fa-2x"></i>
                        <h2>resume</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <button class="btn upper">View more</button>
                    </div> 
                </div>
                <div id="home-blog" class={isOpen? "home-flex on-show" : "home-flex"} onclick={() => {setOpenPreview(true); setType("blog");}}>
                    <div class="home-content">
                        <i class="fas fa-book fa-2x"></i>
                        <h2>blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="book-top" class={isOpen? "animate-top" : ""}></div>
        <div id="book-bottom" class={isOpen? "animate-bottom" : ""}></div>
        <Preview isOpen={isOpenPreview} isType={isTypePreview}/>
    </section>
}