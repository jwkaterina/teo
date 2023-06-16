/** @jsx parseJSX */
import { Reactish, ReactishEntity, parseJSX } from "./reactish";
import { OpenPageContext, OpenState } from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Preview } from "./component/preview";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import "./css/main.css";

export const App = (props: any): ReactishEntity => {

    //hook functions
    const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);
    // Reactish.useEffect([], ()=>{ ...your code });

    if(openState == OpenState.CLOSED) {
        document.querySelector('body').style.overflow = 'auto';
    } else {
        document.querySelector('body').style.overflow = 'hidden';
    }
    
    return <OpenPageContext.Provider value={{openState, setOpenState}}>
        <Header/>
        <Home/>
        <Preview/>
        <Contact/>
        <Footer/>
    </OpenPageContext.Provider>
}