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
                let photosArray = photos.photos.map((photo) => {
                    return {
                        id: photo.id, 
                        url: photo.baseUrl, 
                        date: photo.mediaMetadata.creationTime
                    }
                });
                setPhotos(photosArray);
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
                    <div key={photo.id} date={photo.date} class="gallery-item">
                        <img src={`${photo.url}=w${width}-h${height}`} alt="" />
                    </div>
                    )}
                </div>
              );
        } else {
            let divs = [];
            for(let i = 0; i < 20; i++) {
                divs.push(<div class="gallery-item animate-item"></div>);
            }
            return (
                <div id="gallery">
                    {divs}
                </div>
            );
        }
    }

    const sortPhotos = (year) => {
        const thisPhotos = photos.filter(photo => {
            return photo.date.substring(0, 4) == year
        })
    }

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "portfolio") return <></>

    return <div id="portfolio">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
            </button>
            <h1>portfolio</h1>
            <section class={textClass} onanimationend={onAnimationEnd}>
                <div id="dates">
                    <div class="date" onclick={() => sortPhotos(2021)}>2021</div>
                    <div class="date" onclick={() => sortPhotos(2022)}>2022</div>
                    <div class="date" onclick={() => sortPhotos(2023)}>2023</div>
                </div>
                {loadPhotos()}
            </section>
    </div>
  
}