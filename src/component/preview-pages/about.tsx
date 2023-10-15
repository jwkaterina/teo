import { OpenPageContext, OpenState, TypePreviewContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import PreviewPagesProps from "./preview-pages-props";
import "./about.css";


export const About = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
   
    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "about") return <></>

    return <div id="about">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
        </button>
        <h1>about me</h1>
        <section class={textClass} onanimationend={onAnimationEnd}>
            <div class="fact-group">
                <div class="title">Breed: </div>
                <div class="describtion">Maine Coon</div>
            </div>
            <div class="fact-group">
                <div class="title">Sex: </div>
                <div class="describtion">Male</div>
            </div>
            <div class="fact-group">
                <div class="title">Birthday: </div>
                <div class="describtion">14.08.2021</div>
            </div>
            <div class="fact-group">
                <div class="title">Color: </div>
                <div class="describtion">Tabby</div>
            </div>
            <div class="fact-group">
                <div class="title">Owner: </div>
                <div class="describtion">Kateryna Logoshko</div>
            </div>
        </section>
    </div>
}