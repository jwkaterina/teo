import { Reactish, ReactishEntity } from "./reactish";
import { OpenPageContext, OpenState, ScrollToHomeContext, TypePreviewContext } from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Preview } from "./component/preview";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";
// import { Auth } from "./component/auth";

import { Amplify } from 'aws-amplify';
// import awsconfig from './aws-exports';

import "./css/main.css";

export const App = (props: any): ReactishEntity => {

    const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);
    const [typePreview, setTypePreview] = Reactish.useState("");
    const [scrollToHome, setScrollToHome] = Reactish.useState(false);
    Reactish.useEffect([], () => {
        // awsconfig.oauth.redirectSignIn = `${window.location.origin}/`;
        // awsconfig.oauth.redirectSignOut = `${window.location.origin}/`;
        // Amplify.configure(awsconfig);
    });

    const media = window.matchMedia("(max-width: 1000px)");

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
        {/* <Auth/> */}
        <Header/>
        <Home/>
        <Preview/>
        <Contact/>
        <Footer/>
    </>
    }