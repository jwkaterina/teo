import { Reactish } from "../reactish";
import { OpenPageContext, OpenState, TypePreviewContext, ScrollToHomeContext } from "../context";

export const HomeGrid = (props: HomeGridProps) => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {setTypePreview} = Reactish.useContext(TypePreviewContext);

    const onHomeClick = (type: string) => {
        if(openState == OpenState.CLOSED) {
            setOpenState(OpenState.OPENING);
            setTypePreview(props.typePreview);
        } 
        if(openState == OpenState.OPEN) {
            setOpenState(OpenState.CLOSING);
        }
    } 

    return <div id={props.id} class={openState == OpenState.CLOSED ? "home-flex" : "home-flex dark"} onclick={()=> onHomeClick(props.typePreview)}>
        <div class="home-content">
            <i class={props.iconClass}></i>
            <h2>{props.header}</h2>
            <p>{props.paragraph}</p>
            <button class="btn upper">View more</button>
        </div>
    </div>
}

export interface HomeGridProps {
    id: string,
    iconClass: string,
    header: string,
    paragraph: string,
    typePreview: string
}