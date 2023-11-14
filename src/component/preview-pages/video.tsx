import { Reactish, ReactishEntity } from "../../reactish";
import { VideoContext } from "../../context";
import "./video.css"

export const Video = (): ReactishEntity => {
    const {videoId, setVideoId} = Reactish.useContext(VideoContext);
 
    return (<>
        <iframe id="player" type="text/html" width="640" height="390"
            src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`}
            frameborder="0">
        </iframe>
        <button id="video-close" onclick={() => setVideoId(null)}>
            <div class="cross"></div>
        </button>
    </>
    )
}