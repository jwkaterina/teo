import { Reactish, ReactishEntity } from "../../reactish";
import { VideoContext } from "../../context";
import "./video.css"

export const Video = (): ReactishEntity => {
    const {video, setVideo} = Reactish.useContext(VideoContext);

    return (<>
        <img id="video" class="fade-in" src={video} alt="" />
        <button id="video-close" onclick={() => setVideo(null)}>
            <div class="cross"></div>
            </button>
    </>
    )
}