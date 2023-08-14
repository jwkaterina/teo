import { Reactish, ReactishEntity } from "./reactish";
import { OpenPageContext, OpenState, ScrollToHomeContext, TypePreviewContext, AuthContext, OpaqueContext } from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Preview } from "./component/preview";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import "./css/main.css";

export const App = (props: any): ReactishEntity => {

    const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);
    const [typePreview, setTypePreview] = Reactish.useState("");
    const [scrollToHome, setScrollToHome] = Reactish.useState(false);
    const [logged, setLogged] = Reactish.useState(false);
    const [opaque, setOpaque] = Reactish.useState(false);

    Reactish.useEffect([], () => {
        awsconfig.oauth.redirectSignIn = `${window.location.origin}/`;
        awsconfig.oauth.redirectSignOut = `${window.location.origin}/`;
        Amplify.configure(awsconfig);
    });

    const media = window.matchMedia("(max-width: 1000px)");

    let openClassMobile: string;
    if(!media.matches || openState == OpenState.CLOSED) {
        openClassMobile = ""
    } else if(openState == OpenState.OPENING) {
        openClassMobile = "animate-mobile"
    } else if(openState == OpenState.OPEN || openState == OpenState.EFFECT) {
        openClassMobile = "keep-mobile"
    } else {
        openClassMobile = "animate-reverse-mobile"
    }

    if(openState == OpenState.CLOSED) {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = "auto";

    } else {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = "hidden";
    }
    
    return <>
        <OpenPageContext.Provider value={{openState, setOpenState}}/>
        <TypePreviewContext.Provider value={{typePreview, setTypePreview}}/>
        <ScrollToHomeContext.Provider value={{scrollToHome, setScrollToHome}}/>
        <AuthContext.Provider value={{logged, setLogged}}/>
        <OpaqueContext.Provider value={{opaque, setOpaque}}/>
        <Header openClassMobile={openClassMobile}/>
        <Home openClassMobile={openClassMobile}/>
        <Preview/>
        <Contact openClassMobile={openClassMobile}/>
        <Footer/>
    </>
    }