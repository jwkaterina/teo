import { PhotoContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import { Photo } from "./portfolio";

import "./gallery.css";

interface PhotoGalleryProps {
    photos: Photo[],
    year: number | null
}

export const PhotoGallery = ({photos, year}: PhotoGalleryProps): ReactishEntity => {
    const {setPhoto} = Reactish.useContext(PhotoContext);

    const openPhoto = (photo: Photo) => {
        const url = `${photo.baseUrl}=w${photo.width}-h${photo.height}`;
        setPhoto(url);
    }

    const width = 200;
    const height = 150;
    let thisPhotos: Photo[], className: string;
    if(year) {
        thisPhotos = photos.filter(photo => {
            return photo.date.substring(0, 4) == year.toString();
        })
        className = "gallery-item fade-in";
    } else {
        thisPhotos = photos;
        className = "gallery-item";
    }
   
    if(photos.length > 0) {
        return (
            <div id="gallery">
                {thisPhotos.map((photo) => 
                <div key={photo.id} date={photo.date} class={className} onclick={() => openPhoto(photo)}>
                    <img src={`${photo.baseUrl}=w${width}-h${height}`} alt="" />
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