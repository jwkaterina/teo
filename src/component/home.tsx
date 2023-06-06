/** @jsx createElement */
import { createElement } from "../utils";
import { BookAnimation } from "./book-animation";
import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio";
import { Blog } from "./blog";

import "./home.css"

export const Home = (props: any) => {

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
        },500);
        setTimeout(() => {
            document.getElementById(page).querySelector('p').classList.remove('animate-text');
        },700);
    }

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

    return  <section id="home">
        <div id="home-main">
            <div id="home-left">
                <div id="home-about" class="home-flex" onclick={() => openPage("about")}>
                    <div class="home-content">
                        <i class="fas fa-cat fa-2x"></i>
                        <h2>about me</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
                <div id="home-portfolio" class="home-flex" onclick={() => openPage("portfolio")}>
                    <div class="home-content">
                        <i class="fas fa-briefcase fa-2x"></i>
                        <h2>portfolio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <button class="btn upper">View more</button>
                    </div>
                </div>
            </div>
            <div id="home-right">
                <div id="home-resume" class="home-flex" onclick={() => openPage("resume")}>
                    <div class="home-content">
                        <i class="fas fa-id-card fa-2x"></i>
                        <h2>resume</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <button class="btn upper">View more</button>
                    </div> 
                </div>
                <div id="home-blog" class="home-flex" onclick={() => openPage("blog")}>
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
        <About/>
        <Resume/>
        <Portfolio/>
        <Blog/>
    </section>
}