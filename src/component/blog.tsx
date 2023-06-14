/** @jsx parseJSX */
import { Reactish, parseJSX } from "../reactish";
import { Preview } from "./preview";

export const Blog = (props: BlogProps) => {

    return <div id="blog">
        <div class="book-container">
            {/* <button class="btn-close" onclick={() => Preview().closePage('blog')}>
                <div class="cross"></div>
            </button> */}
            <h1>blog</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id sequi, eveniet est inventore laborum eum blanditiis mollitia nostrum illo, maxime quidem non magnam porro, consequatur qui! Eos praesentium sapiente, illo porro quas beatae corporis possimus inventore nulla voluptatem impedit repudiandae itaque magni. Inventore exercitationem corporis eius impedit aut asperiores beatae eligendi sapiente dolor in. Consequuntur ullam iusto repudiandae, adipisci nulla obcaecati, omnis repellendus quasi quod tempore commodi nobis sit alias explicabo perferendis aliquam exercitationem maxime consequatur optio ad blanditiis in ab officiis. Repellendus ipsa labore velit debitis laboriosam nisi veritatis commodi, atque, natus facere voluptates ullam officia necessitatibus repellat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsa illum, maiores, perferendis sed corporis quo nulla mollitia itaque distinctio natus sit vero velit minima nesciunt molestiae adipisci qui inventore labore accusantium soluta unde eveniet deleniti? Animi rem a provident, repellendus aperiam eligendi aspernatur quaerat, repudiandae eveniet, ullam eaque quo debitis pariatur. Ipsa velit tempore at accusamus nisi eveniet, inventore neque quam dolorum! Expedita deserunt, iusto earum impedit laboriosam dolor eveniet voluptatem enim laborum, ipsam, distinctio ipsa vero illo quis repellendus ad. Mollitia nam repudiandae est inventore asperiores ipsam expedita praesentium, nisi numquam iure impedit alias dolor quod repellendus suscipit itaque, recusandae earum quaerat. Quaerat fugiat, nemo ipsa officia distinctio quas fugit dolorem sit impedit, quod facilis, obcaecati dignissimos odio! Tempore cum quis dolorem corrupti cumque, placeat consequatur exercitationem blanditiis quod explicabo! Totam, dolorem mollitia ducimus quas sapiente provident eum fuga tempore libero? Ex explicabo consequatur necessitatibus, qui nisi quia nemo nostrum ut dolores delectus at assumenda culpa excepturi. Ad vitae architecto, amet nihil natus molestiae praesentium eaque, odio provident voluptas adipisci fugit saepe laboriosam facilis, ea sunt! Omnis excepturi labore ex eligendi delectus quaerat dignissimos, assumenda voluptates hic animi voluptate laborum atque, ducimus unde pariatur quia voluptatibus ipsum vel?
            </p>
        </div>
    </div>
}

export interface BlogProps {
    isOpen: boolean
}