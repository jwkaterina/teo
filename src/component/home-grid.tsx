import { Reactish, ReactishEntity } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext, AuthContext } from "../context";

import "./home-grid.css"

export interface HomeGridProps {
    id: string,
    iconClass: string,
    header: string,
    paragraph: string,
    typePreview: string
}

export const HomeGrid = ({ id, iconClass, header, paragraph, typePreview}: HomeGridProps): ReactishEntity => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {logged} = Reactish.useContext(AuthContext);
    const {setTypePreview} = Reactish.useContext(TypePreviewContext);

    const onHomeClick = (type: string) => {
        if(!logged) return;
        if(openState == OpenState.CLOSED) {
            setOpenState(OpenState.OPENING);
            setTypePreview(typePreview);
        } 
        if(openState == OpenState.OPEN) {
            setOpenState(OpenState.CLOSING);
        }
    } 

    return <div id={id} class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick(typePreview)}>
        <div class="home-content">
            <i class={iconClass}></i>
            <h2>{header}</h2>
            <p>{paragraph}</p>
            <button class="btn upper">View more</button>
        </div>
    </div>
}