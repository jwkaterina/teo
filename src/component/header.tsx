/** @jsx createElement */
import { createElement } from "../utils";

export const Header = (props: any) => {
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