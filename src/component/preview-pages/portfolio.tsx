import { OpenPageContext, OpenState, TypePreviewContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import { Gallery } from "./gallery";
import { getPhotos } from "../../service/photos";
import PreviewPagesProps from "./preview-pages-props";

import "./portfolio.css";

export type Photo = {
    id: string,
    baseUrl: string,
    date: string,
    mediaMetadata: {
        creationTime: string
    }
}

export const Portfolio = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {
  
    const [photos, setPhotos] = Reactish.useState<Photo[]>([]);
    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [year, setYear] = Reactish.useState<number | null>(null);

    Reactish.useEffect([], () => {
        getPhotos()
            .then((photos) => {
                let photosArray = photos.photos.map((photo: Photo) => {
                    return {
                        id: photo.id, 
                        baseUrl: photo.baseUrl, 
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
        <button class="btn-close"  onclick={() => {
            setOpenState(OpenState.CLOSED);
            setYear(null);
            }}>
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