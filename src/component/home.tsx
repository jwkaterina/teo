/** @jsx createElement */
import { createElement } from "../utils";
import { BookAnimation } from "../service/book-animation";
import "./home.css"

export const Home = (props: any) => {

    const openPage = (page: string) => {
        // removeEventListeners();
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
        console.log("close");
        document.getElementById(page).querySelector('p').classList.add('animate-text-reverse');
        setTimeout(() => {
            document.getElementById(page).querySelector('.book-container').classList.remove('show');
            document.getElementById(page).querySelector('p').classList.remove('animate-text-reverse');
            document.querySelectorAll('.home-flex').forEach(function(item) {
                item.classList.remove('on-show'); // Bring home elements back to normal
            })
            document.querySelector('body').style.overflow = 'auto';
            // loadEventListeners();
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
        <div id="about">
            <div class="book-container">
                <button class="btn-close" onclick={() => closePage('about')}>
                    <div class="cross"></div>
                </button>
                <h1>about me</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id sequi, eveniet est inventore laborum eum blanditiis mollitia nostrum illo, maxime quidem non magnam porro, consequatur qui! Eos praesentium sapiente, illo porro quas beatae corporis possimus inventore nulla voluptatem impedit repudiandae itaque magni. Inventore exercitationem corporis eius impedit aut asperiores beatae eligendi sapiente dolor in. Consequuntur ullam iusto repudiandae, adipisci nulla obcaecati, omnis repellendus quasi quod tempore commodi nobis sit alias explicabo perferendis aliquam exercitationem maxime consequatur optio ad blanditiis in ab officiis. Repellendus ipsa labore velit debitis laboriosam nisi veritatis commodi, atque, natus facere voluptates ullam officia necessitatibus repellat?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsa illum, maiores, perferendis sed corporis quo nulla mollitia itaque distinctio natus sit vero velit minima nesciunt molestiae adipisci qui inventore labore accusantium soluta unde eveniet deleniti? Animi rem a provident, repellendus aperiam eligendi aspernatur quaerat, repudiandae eveniet, ullam eaque quo debitis pariatur. Ipsa velit tempore at accusamus nisi eveniet, inventore neque quam dolorum! Expedita deserunt, iusto earum impedit laboriosam dolor eveniet voluptatem enim laborum, ipsam, distinctio ipsa vero illo quis repellendus ad. Mollitia nam repudiandae est inventore asperiores ipsam expedita praesentium, nisi numquam iure impedit alias dolor quod repellendus suscipit itaque, recusandae earum quaerat. Quaerat fugiat, nemo ipsa officia distinctio quas fugit dolorem sit impedit, quod facilis, obcaecati dignissimos odio! Tempore cum quis dolorem corrupti cumque, placeat consequatur exercitationem blanditiis quod explicabo! Totam, dolorem mollitia ducimus quas sapiente provident eum fuga tempore libero? Ex explicabo consequatur necessitatibus, qui nisi quia nemo nostrum ut dolores delectus at assumenda culpa excepturi. Ad vitae architecto, amet nihil natus molestiae praesentium eaque, odio provident voluptas adipisci fugit saepe laboriosam facilis, ea sunt! Omnis excepturi labore ex eligendi delectus quaerat dignissimos, assumenda voluptates hic animi voluptate laborum atque, ducimus unde pariatur quia voluptatibus ipsum vel?
                </p>
            </div>
        </div>
        <div id="resume">
            <div class="book-container">
                <button class="btn-close" nclick={() => closePage('resume')}>
                    <div class="cross"></div>
                </button>
                <h1>resume</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum quisquam perspiciatis minima repellendus. Suscipit accusantium corporis eos sequi earum. Obcaecati ipsum, consequuntur illo eum, libero reiciendis nihil harum officiis molestias nemo ipsam? Optio, ad excepturi. Quaerat, eum? Labore enim saepe praesentium corporis, totam dolorem nesciunt illo non incidunt similique suscipit eaque, aliquam vero laudantium reprehenderit dolore placeat repellendus consequuntur consequatur debitis nemo reiciendis deserunt? Optio minus atque quia nobis odit veniam, quasi delectus dolorem omnis vitae, vero sequi consequatur molestiae animi deleniti porro saepe aut rem, molestias nulla! Nam, nobis reiciendis. Commodi numquam vero est maiores reiciendis eum voluptate!</p>
            </div>
        </div>
        <div id="portfolio">
            <div class="book-container">
                <button class="btn-close" nclick={() => closePage('portfolio')}>
                    <div class="cross"></div>
                </button>
                <h1>portfolio</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquam dolorum sed vero, officia architecto? Rem sit laborum iste ipsa modi quisquam accusamus, quae fugit, reiciendis, exercitationem dolor recusandae dolorum voluptates eos labore provident dignissimos ipsam. Recusandae odio quae suscipit minima totam dolorum iure minus, repellat voluptates nesciunt, repudiandae voluptatum fuga nulla omnis iusto ab incidunt rerum error! Veniam eveniet architecto animi perferendis rem soluta ipsam nulla maxime quam deleniti labore omnis nisi, id quibusdam possimus ab quidem accusamus dolorem ad incidunt error eum enim tempora. Quod quam accusamus tempore error eos, soluta sit itaque iusto excepturi distinctio corporis modi.</p>
            </div>
        </div>
        <div id="blog">
            <div class="book-container">
                <button class="btn-close" nclick={() => closePage('blog')}>
                    <div class="cross"></div>
                </button>
                <h1>blog</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe enim at in provident consequatur eveniet iste sed quidem ratione soluta quae ipsam officiis, et eum expedita voluptatem excepturi. Quod debitis fuga officiis numquam laboriosam doloribus necessitatibus distinctio sint blanditiis. Iusto harum accusamus deleniti magnam eligendi, accusantium, quaerat repellendus a sit molestiae odit laboriosam minima eius. Corporis alias dignissimos nisi veniam ratione ipsa quo itaque perferendis dolorum ab unde tempore harum in odio dolorem, autem doloribus, omnis quam quasi a provident hic mollitia, fugit tempora. Voluptas aspernatur error placeat, quisquam nesciunt consequuntur, labore exercitationem blanditiis expedita eum animi, repellat incidunt?</p>
            </div>
        </div>
    </section>
}