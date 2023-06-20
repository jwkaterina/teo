import { Reactish, ReactishEntity } from "./reactish";
import { OpenPageContext, OpenState, ScrollToHomeContext, TypePreviewContext } from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Preview } from "./component/preview";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import "./css/main.css";

export const App = (props: any): ReactishEntity => {

    const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);
    const [typePreview, setTypePreview] = Reactish.useState("");
    const [scrollToHome, setScrollToHome] = Reactish.useState(false);

    const media = window.matchMedia("(max-width: 1000px)");

    if(openState == OpenState.CLOSED) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }

    if(openState != OpenState.CLOSED && media.matches) {
        document.documentElement.style.overflow = "hidden";
    } else {
        document.documentElement.style.overflow = "auto";
    }
    
    return <>
        <OpenPageContext.Provider value={{openState, setOpenState}}/>
        <TypePreviewContext.Provider value={{typePreview, setTypePreview}}/>
        <ScrollToHomeContext.Provider value={{scrollToHome, setScrollToHome}}/>
        <Header/>
        <Home/>
        <Preview/>
        <Contact/>
        <Footer/>
    </>
    }