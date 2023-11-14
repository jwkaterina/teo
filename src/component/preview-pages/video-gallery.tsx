import { VideoContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import { Video } from "./blog";

import "./gallery.css";

interface VideoGalleryProps {
    videos: Video[],
}

export const VideoGallery = ({ videos }: VideoGalleryProps): ReactishEntity => {

    const {setVideoId} = Reactish.useContext(VideoContext);

    const openVideo = (videoId: string) => {
        setVideoId(videoId);
        console.log(videoId)
    }

    const media = window.matchMedia("(max-width: 1000px)");

    if(videos.length > 0) {
        return (
            <div id="video-gallery">
                {videos.map((video) => 
                    <div class="video-container" key={video.id} 
                    onclick={() => openVideo(video.id)}
                    >
                    <img src={media.matches ? video.smallSnippetUrl : video.bigSnippetUrl} alt="" />
                    <i class="far fa-play-circle"></i>
                </div>
                )}
            </div>
            )
    } else {   
        let divs = [];
        for(let i = 0; i < 20; i++) {
            divs.push(<div class="animate-item"></div>);
        }
        return (
            <div id="video-gallery">
                {divs}
            </div>
        );
    }
}