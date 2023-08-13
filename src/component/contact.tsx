import { Reactish } from "../reactish";
import { OpenPageContext, OpenState } from "../context";
import { Map } from "./map";
import "./contact.css";

export const Contact = ( { openClassMobile }) => {

    enum SubmitState {
        DEFAULT,
        SUBMIT_ERROR,
        SUBMIT_SUCCESS,
    }

    type Inputs = {
        name: string,
        email: string,
        message: string
    }

    const [submitState, setSubmitState] = Reactish.useState(SubmitState.DEFAULT);
    const [inputs, setInputs] = Reactish.useState<Inputs>({name: "", email: "", message: ""});
    const {openState} = Reactish.useContext(OpenPageContext);
    const [nameRef] = Reactish.useRef<HTMLInputElement>();
    const [emailRef] = Reactish.useRef<HTMLInputElement>();
    const [messageRef] = Reactish.useRef<HTMLInputElement>();
    const memorizedMap = Reactish.useMemo([], () => Map());

    Reactish.useEffect([openState], () => {
        if(openState == OpenState.OPEN) {
            setSubmitState(SubmitState.DEFAULT);
            setInputs({name: "", email: "", message: ""});
        }
    })

    const submit = (e: SubmitEvent) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        console.log(name, email, message);

        setInputs({
            name, 
            email, 
            message
        });

        if(name != '' && email != '' && emailIsValid(email) && message != '') {
            setSubmitState(SubmitState.SUBMIT_SUCCESS);
        } else {
            setSubmitState(SubmitState.SUBMIT_ERROR);
        }
    }

    const evaluateAlertClass = (key: string, showClass: string, notShowClass: string) => {
        if(submitState != SubmitState.SUBMIT_ERROR) {
            return notShowClass
        }
        if(inputs[key] === '' || (key === "email" && !emailIsValid())) {
            return showClass
        } else {
            return notShowClass
        }
    }

    const evaluateAlertText = (emptyClass: string, notValidClass: string) => {
        if(submitState != SubmitState.SUBMIT_ERROR) {
            return ""
        }
        if(inputs.email === '') {
            return emptyClass
        } else if(!emailIsValid()) {
            return notValidClass
        } else {
            return ""
        }
    }

    const emailIsValid = (email = inputs.email) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if(!re.test(email)) {
            return false
        } else return true
    }

    const evaluateValue = (key: string) => {
        if(submitState == SubmitState.SUBMIT_ERROR) {
            return inputs[key]
        } else {
            return ""
        }
    }

    let checkboxClass: string;
        if(submitState == SubmitState.SUBMIT_SUCCESS) {
            checkboxClass = "animate-checkbox"
        } else {
            checkboxClass = ""
        }

    const checkboxAnimationEnd = () => {
        setSubmitState(SubmitState.DEFAULT);
        setInputs({name: "", email: "", message: ""});
    }

    const focusInput = () => {
        if(submitState != SubmitState.SUBMIT_ERROR || openState !== OpenState.CLOSED) return
        if(inputs.name === '') {
            nameRef.current.focus();
        } else if(inputs.email === '') {
            emailRef.current.focus();
        } else if(inputs.message === '') {
            messageRef.current.focus();
        }
    }

    setTimeout(() => focusInput(), 0);

    return <section id="contact-form" class={openClassMobile}>
        <div id="checkbox" class={checkboxClass} onAnimationend={checkboxAnimationEnd}>
            <i class="far fa-check-circle fa-8x"></i>
        </div>
        <div id="contact-grid">
            <div id="map-container" dangerouslySetInnerHTML={memorizedMap} />
            <div id="form" onsubmit={(e: SubmitEvent) => submit(e)}>
                <form action="">
                    <p class="upper">Drop me a line</p>
                    <div class="input-group">
                        <label class="upper" for="name">Name</label>
                        <input id="name" type="text" class="input" ref={nameRef} value={evaluateValue("name")}/>
                        <div class={evaluateAlertClass("name", "show-message invalid upper", "invalid upper")}>
                            <div class="arrow"></div>
                            <p>This field is requied.</p>
                        </div>
                    </div>
                    <div class="input-group">
                        <label class="upper" for="email">Email</label>
                        <input id="email" class="input" ref={emailRef} value={evaluateValue("email")}/>
                        <div class={evaluateAlertClass("email", "show-message invalid upper", "invalid upper")}>
                            <div class="arrow"></div>
                            <p>{evaluateAlertText("This field is requied.", "Please Enter a Valid Email Adress.")}</p>
                        </div>
                    </div>
                    <div  class="input-group">
                        <label class="upper" for="message">Message</label>
                        <textarea name="message" class="input" id="message" ref={messageRef}
                        >{evaluateValue("message")}</textarea>
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