import { Reactish } from "../reactish";
import { ScrollToHomeContext, OpenPageContext, OpenState } from "../context";
import { MapAPI } from "../service/map";
import "./contact.css";

export const Contact = (props: any) => {

    const {openState} = Reactish.useContext(OpenPageContext);

    const evaluateClassMobile = (closedClassMobile: string, openingClassMobile: string, openClassMobile: string, closingClassMobile: string): string => {
        const media = window.matchMedia("(max-width: 1000px)");
        if(!media.matches) {
            return ""
        }
        if(openState == OpenState.CLOSED) {
            return closedClassMobile
        } else if(openState == OpenState.OPENING) {
            return openingClassMobile
        } else if(openState == OpenState.OPEN) {
            return openClassMobile
        } else {
            return closingClassMobile
        }
    }

    Reactish.useEffect([], () => {
        MapAPI.create()
        //do we have enough places
    });
    
    const validateForm = (e: SubmitEvent) => {
        e.preventDefault();
    
        const inputs = document.querySelectorAll(".input");
        if(formIsValid(inputs)) {
            document.getElementById('checkbox').className = 'animate-checkbox';
            setTimeout(() => {
                document.getElementById('checkbox').classList.remove('animate-checkbox');
            },2000);
            inputs.forEach(input => (input as HTMLInputElement).value = '');
        } else {
            const emptyInput = document.querySelector('.show-message').previousElementSibling as HTMLInputElement;
            emptyInput.focus();
        }
    };

    const formIsValid = (inputs: NodeList) => {
        inputs.forEach(input => {
            const alert = (input as HTMLElement).nextElementSibling;
            if((input as HTMLInputElement).value === ''){
                alert.classList.add('show-message');
            } else if((input as HTMLElement).id === "email" && !emailIsValid()){
                alert.classList.add('show-message');
                alert.querySelector("p").innerHTML = "Please Enter a Valid Email Adress."
            } else {
                alert.classList.remove('show-message');            }
        });

        const alerts = Array.from(document.querySelectorAll(".invalid"));
        if (alerts.every(alert => !alert.classList.contains("show-message"))) {
            return true
        } else {
            return false
        }
    }

    const emailIsValid = () => {
        const email = document.getElementById("email");
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!re.test((email as HTMLInputElement).value)) {
            return false
        } else return true
    }

    return <section id="contact-form" class={evaluateClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")}>
        <div id="checkbox">
            <i class="far fa-check-circle fa-8x"></i>
        </div>
        <div id="contact-grid">
            <div id="map-container">
                <div id="map"></div>
            </div>
            <div id="form" onsubmit={(e: SubmitEvent) => validateForm(e)}>
                <form action="">
                    <p class="upper">Drop me a line</p>
                    <div class="input-group">
                        <label class="upper" for="name">Name</label>
                        <input id="name" type="text" class="input"></input>
                        <div class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <label class="upper" for="email">Email</label>
                        <input id="email" class="input"></input>
                        <div class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div  class="input-group">
                        <label class="upper" for="message">Message</label>
                        <textarea name="message" class="input" id="message"></textarea>
                        <div class="invalid upper">
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <button class="btn-submit upper" type="submit">Send</button>
                </form>
            </div>
        </div>
        <div id="contact">
            <div class="icon-group">
                <i class="far fa-map fa-2x"></i> 
                <p class="upper">Based in Berlin, Germany</p>
            </div>
            <div class="icon-group">
                <i class="fas fa-mobile-alt fa-2x"></i>
                <p class="upper">Tel: +49 1234 567 8910</p>
            </div>
            <div class="icon-group">
                <i class="far fa-envelope fa-2x"></i>
                <p class="upper">Theodor@gmail.com</p>
            </div>
        </div>
    </section>
}