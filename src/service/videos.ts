import { API } from "aws-amplify";

export const getVideos = async () => {
    try {
        const init = {
            headers: {
                'Content-Type' : 'application/json',
            }
        };
        const res = await API.get("teo", "/videos", init);
        return res;
    } catch (e) {
        console.log(e);
    }
}