import { OpenPageContext, OpenState, TypePreviewContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import PreviewPagesProps from "./preview-pages-props";
import { getVideos } from "../../service/videos";
import { VideoGallery } from "./video-gallery";

export type Video = {
    smallSnippetUrl: string,
    bigSnippetUrl: string,
    id: string
}

export const Blog = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [videos, setVideos] = Reactish.useState<Video[]>([]);

    Reactish.useEffect([], () => {
        getVideos()
            .then((videos) => {
                console.log(videos);
                let videoArray: Video[] = videos.videosInfo.map((video) => {
                    return {
                        id: video.id, 
                        bigSnippetUrl: video.snippet.thumbnails.high.url,
                        smallSnippetUrl: video.snippet.thumbnails.medium.url,

                    }
                });
                setVideos(videoArray);

                /*
                * To see how to create a video player,
                * go to https://developers.google.com/youtube/iframe_api_reference
                */
            }).catch((err) => {
                console.log(err);
            });
    })

    if((openState != OpenState.OPEN && openState != OpenState.EFFECT) || typePreview !== "blog") return <></>

    return <div id="blog">
        <button class="btn-close"  onclick={() => setOpenState(OpenState.CLOSING)}>
            <div class="cross"></div>
        </button>
        <h1>blog</h1>
        <section class={textClass} onanimationend={onAnimationEnd}>
            <VideoGallery videos={videos} />
        </section>
    </div>
}