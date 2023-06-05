/** @jsx createElement */
import { createElement } from "./utils";
// import { Reactish } from "./reactish";
import { Header } from "./component/header";
import { Home } from "./component/home";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import "./css/main.css";

const App = (props: any) => {

    //hook functions
    // const [count, setCount] = Reactish.useState(1);
    // Reactish.useEffect([], ()=>{ ...your code });

    return <div>
        <Header/>
        <Home/>
        <Contact/>
        <Footer/>
    </div>
}

export {
    App
}