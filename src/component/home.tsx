/** @jsx createElement */
import { createElement } from "../utils";
import { BookAnimation } from "./book-animation";
import { Reactish } from "../reactish";
import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";
import { rerender } from "../rerender";

import "./home.css"

export const Home = () => {
    const [isPageOpen, setPageOpen] = Reactish.useState(false);
    const [isOpenAbout, setOpenAbout] = Reactish.useState(false);
    const [isOpenResume, setOpenResume] = Reactish.useState(false);
    const [isOpenPortfolio, setOpenPortfolio] = Reactish.useState(false);
    const [isOpenBlog, setOpenBlog] = Reactish.useState(false);

    const openPage = (page: string) => {
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelectorAll('.home-flex').forEach(function(item) {
            item.classList.add('on-show'); // Darken home elements
        })
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
            <div id="home-left">
                <div id="home-about" class="home-flex" onclick={() => {setOpenAbout(true); rerender()}}>
                    <div class="home-content">
                        <i class="fas fa-cat fa-2x"></i>
                        <h2>about me</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
                <div id="home-portfolio" class="home-flex" onclick={() => {setOpenPortfolio(true); rerender()}}>
                    <div class="home-content">
                        <i class="fas fa-briefcase fa-2x"></i>
                        <h2>portfolio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
            </div>
            <div id="home-right">
                <div id="home-resume" class="home-flex" onclick={() => {setOpenResume(true); rerender()}}>
                    <div class="home-content">
                        <i class="fas fa-id-card fa-2x"></i>
                        <h2>resume</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <button class="btn upper">View more</button>
                    </div> 
                </div>
                <div id="home-blog" class="home-flex" onclick={() => {setOpenBlog(true); rerender()}}>
                    <div class="home-content">
                        <i class="fas fa-book fa-2x"></i>
                        <h2>blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="book-top"></div>
        <div id="book-bottom"></div>
        <About isOpen={isOpenAbout}/>
        <Resume isOpen={isOpenResume}/>
        <Portfolio isOpen={isOpenPortfolio}/>
        <Blog isOpen={isOpenBlog}/>
    </section>
}