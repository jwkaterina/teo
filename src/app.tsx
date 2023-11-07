import { Reactish, ReactishEntity } from "./reactish";
import { ContextProviders, OpenState, OpenPageContext} from "./context";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Preview } from "./component/preview";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import "./css/main.css";

export const App = (): ReactishEntity => {

    const [openState, setOpenState] = Reactish.useState(OpenState.CLOSED);

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

    Reactish.useEffect([openState], () => {
        if(openState == OpenState.CLOSED) {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = "auto";
        } else {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = "hidden";
        }
    });
    
    return <>
        <ContextProviders>
            <OpenPageContext.Provider value={{openState, setOpenState}}>
                <Header openClassMobile={openClassMobile}/>
                <Home openClassMobile={openClassMobile}/>
                <Preview/>
                <Contact openClassMobile={openClassMobile}/>
            </OpenPageContext.Provider>
        </ContextProviders>
        <Footer/>
    </>
    }