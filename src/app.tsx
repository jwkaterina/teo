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

    if(openState == OpenState.CLOSED) {
        document.querySelector('body').style.overflow = 'auto';
    } else {
        document.querySelector('body').style.overflow = 'hidden';
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