import { Reactish } from "../reactish";
import { OpenPageContext, OpenState } from "../context";
import { Map } from "./map";
import "./contact.css";

export const Contact = () => {

    enum SubmitState {
        NOT_SUBMITTED = "NOT_SUBMITTED",
        SUBMITTING = "SUBMITTING",
        SUBMIT_ERROR = "SUBMIT_ERROR",
        SUBMIT_SUCCESS = "SUBMIT_SUCCESS",
    }

    type Inputs = {
        name: string,
        email: string,
        message: string
    }

    const [submitState, setSubmitState] = Reactish.useState(SubmitState.NOT_SUBMITTED);
    const [inputs, setInputs] = Reactish.useState<Inputs>({name: "", email: "", message: ""});
    const {openState} = Reactish.useContext(OpenPageContext);
    const [checkboxRef] = Reactish.useRef<HTMLElement>();
    const [nameRef] = Reactish.useRef<HTMLElement>();
    const [emailRef] = Reactish.useRef<HTMLElement>();
    const [messageRef] = Reactish.useRef<HTMLElement>();

    const evaluateOpenClassMobile = (closedClassMobile: string, openingClassMobile: string, openClassMobile: string, closingClassMobile: string): string => {
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


    const submit = () => {
        setSubmitState(SubmitState.SUBMITTING);
        setInputs({
            name: (nameRef.current as HTMLInputElement).value, 
            email: (emailRef.current as HTMLInputElement).value, 
            message: (messageRef.current as HTMLInputElement).value
        });
    }

    const evaluateAlertClass = (key: string, showClass: string, notShowClass: string) => {
        if(submitState != SubmitState.SUBMITTING) {
            return notShowClass
        }
        if(inputs[key] === '') {
            return showClass
        } else {
            return notShowClass
        }
    }
    
    const validateForm = (e: SubmitEvent) => {
        e.preventDefault();
    
        // console.log(submitState);
        const inputs = document.querySelectorAll(".input");
        if(formIsValid(inputs)) {
            checkboxRef.current.className = 'animate-checkbox';
            setTimeout(() => {
                checkboxRef.current.classList.remove('animate-checkbox');
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
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!re.test((emailRef.current as HTMLInputElement).value)) {
            return false
        } else return true
    }

    return <section id="contact-form" class={evaluateOpenClassMobile("", "animate-mobile", "keep-mobile", "animate-reverse-mobile")}>
        <div id="checkbox" ref={checkboxRef}>
            <i class="far fa-check-circle fa-8x"></i>
        </div>
        <div id="contact-grid">
            <Map/>
            <div id="form" onsubmit={(e: SubmitEvent) => {
                e.preventDefault();
                submit();
                // validateForm(e)
            }}>
                <form action="">
                    <p class="upper">Drop me a line</p>
                    <div class="input-group">
                        <label class="upper" for="name">Name</label>
                        <input id="name" type="text" class="input" ref={nameRef}/>
                        <div class={evaluateAlertClass("name", "show-message invalid upper", "invalid upper")}>
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <label class="upper" for="email">Email</label>
                        <input id="email" class="input" ref={emailRef}/>
                        <div class={evaluateAlertClass("email", "show-message invalid upper", "invalid upper")}>
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div  class="input-group">
                        <label class="upper" for="message">Message</label>
                        <textarea name="message" class="input" id="message" ref={messageRef}></textarea>
                        <div class={evaluateAlertClass("message", "show-message invalid upper", "invalid upper")}>
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