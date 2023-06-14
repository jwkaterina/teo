/** @jsx parseJSX */
import { Reactish, ReactishEntity, parseJSX } from "./reactish";
import { OpenPageContext } from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import "./css/main.css";

export const App = (props: any): ReactishEntity => {

    //hook functions
    const [isOpen, setOpen] = Reactish.useState(false);
    // Reactish.useEffect([], ()=>{ ...your code });

    if(isOpen) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'auto';
    }
    
    return <OpenPageContext.Provider value={{isOpen, setOpen}}>
        <Header/>
        <Home/>
        <Contact/>
        <Footer/>
    </OpenPageContext.Provider>
}