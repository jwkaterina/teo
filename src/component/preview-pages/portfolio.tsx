import { OpenPageContext, OpenState, TypePreviewContext, AuthContext, PhotoContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import { getPhotos } from "../../service/photos";
import PreviewPagesProps from "./preview-pages";

import "./portfolio.css";

export const Portfolio = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {
    type Photo = {
        id: string,
        baseUrl: string,
        mediaMetadata: {
            creationTime: string
        }
    }

    const [photos, setPhotos] = Reactish.useState<Photo[]>([]);
    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const {logged} = Reactish.useContext(AuthContext);
    const [year, setYear] = Reactish.useState<number | null>(null);

    Reactish.useEffect([], () => {
        getPhotos()
            .then((photos) => {
                let photosArray = photos.photos.map((photo: Photo) => {
                    return {
                        id: photo.id, 
                        url: photo.baseUrl, 
                        date: photo.mediaMetadata.creationTime
                    }
                });

                const shuffledArray = photosArray
                    .map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                setPhotos(shuffledArray);
            }).catch((err) => {
                console.log(err);
            });
    })

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "portfolio") return <></>

    return <div id="portfolio">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
            </button>
            <h1>portfolio</h1>
            <section class={textClass} onanimationend={onAnimationEnd}>
                <div id="dates">
                    <div class="date" onclick={() => setYear(null)}>All</div>
                    <div class="date" onclick={() => setYear(2021)}>2021</div>
                    <div class="date" onclick={() => setYear(2022)}>2022</div>
                    <div class="date" onclick={() => setYear(2023)}>2023</div>
                </div>
                <Gallery photos={photos} year={year} />
            </section>
    </div>
  
}

const Gallery = ({photos, year}) => {
    const {setPhoto} = Reactish.useContext(PhotoContext);

    const openPhoto = (url) => {
        setPhoto(url);
    }


    const width = 200;
    const height = 150;
    let thisPhotos;
    if(year) {
        thisPhotos = photos.filter(photo => {
            return photo.date.substring(0, 4) == year
        })
    } else {
        thisPhotos = photos;
    }
   
    if(photos.length > 0) {

        return (
            <div id="gallery">
                {thisPhotos.map((photo) => 
                <div key={photo.id} date={photo.date} class="gallery-item fade-in" onclick={() => openPhoto(photo.url)}>
                    <img src={`${photo.url}=w${width}-h${height}`} alt="" />
                </div>
                )}
            </div>
          );
    } else {   
        let divs = [];
        for(let i = 0; i < 20; i++) {
            divs.push(<div class="animate-item"></div>);
        }
        return (
            <div id="gallery">
                {divs}
            </div>
        );
    }
}