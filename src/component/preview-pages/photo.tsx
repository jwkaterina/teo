import { Reactish, ReactishEntity } from "../../reactish";
import { PhotoContext } from "../../context";
import "./photo.css"

export const Photo = (): ReactishEntity => {
    const {photo, setPhoto} = Reactish.useContext(PhotoContext);

    const width = 400;
    const height = 300;
    return (<>
        <img id="photo" class="fade-in" src={`${photo}=w${width}-h${height}`} alt="" />
        <button id="photo-close" onclick={() => setPhoto(null)}>
            <div class="cross"></div>
            </button>
    </>
    )
}