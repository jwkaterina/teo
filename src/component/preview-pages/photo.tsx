import { Reactish, ReactishEntity } from "../../reactish";
import { PhotoContext } from "../../context";
import "./photo.css"

export const Photo = (): ReactishEntity => {
    const {photo, setPhoto} = Reactish.useContext(PhotoContext);

    return (<>
        <img id="photo" class="fade-in" src={photo} alt="" />
        <button id="photo-close" onclick={() => setPhoto(null)}>
            <div class="cross"></div>
            </button>
    </>
    )
}