import { OpenPageContext, OpenState, TypePreviewContext } from "../../context";
import { Reactish, ReactishEntity } from "../../reactish";
import PreviewPagesProps from "./preview-pages-props";
import { getVideos } from "../../service/videos";
import { VideoGallery } from "./video-gallery";

export type Video = {
    smallSnippetUrl: string,
    bigSnippetUrl: string,
    id: string,
    title: string
}

export const Blog = ({ textClass, onAnimationEnd }: PreviewPagesProps): ReactishEntity => {

    const {openState, setOpenState} = Reactish.useContext(OpenPageContext);
    const {typePreview} = Reactish.useContext(TypePreviewContext);
    const [videos, setVideos] = Reactish.useState<Video[]>([]);

    Reactish.useEffect([openState], () => {
        if(openState != OpenState.OPEN) return;
        getVideos()
            .then((videos) => {
                console.log(videos);
                let videoArray: Video[] = videos.videosInfo.map((video) => {
                    return {
                        id: video.snippet.resourceId.videoId, 
                        bigSnippetUrl: video.snippet.thumbnails.high.url,
                        smallSnippetUrl: video.snippet.thumbnails.medium.url,
                        title: video.snippet.title
                    }
                });
                setVideos(videoArray);

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