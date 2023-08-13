import { OpenPageContext, OpenState, TypePreviewContext, AuthContext } from "../context";
import { Reactish } from "../reactish";
import { getPhotos } from "../service/photos";

import "./portfolio.css";

export const Portfolio = ({ textClass, onAnimationEnd }) => {

    const [photos, setPhotos] = Reactish.useState([]);

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const {logged} = Reactish.useContext(AuthContext);

    Reactish.useEffect([], () => {
        getPhotos()
            .then((photos) => {
                setPhotos(photos.photos);
                // console.log(photos);
            }).catch((err) => {
                console.log(err);
            });
    })

    const loadPhotos = () => {
        const width = 200;
        const height = 150;
        if(photos.length > 0) {
            return (
                <div id="gallery">
                    {photos.map((photo) => 
                    <div class="gallery-item">
                        <img src={`${photo.baseUrl}=w${width}-h${height}`} alt="" />
                    </div>
                    )}
                </div>
              );
        } else {
            return <p>loading...</p>
        }
    }

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "portfolio") return <></>

    return <div id="portfolio">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
            </button>
            <h1>portfolio</h1>
            <section class={textClass} onanimationend={onAnimationEnd}>
                {loadPhotos()}
            </section>
    </div>
  
}