import { API } from "aws-amplify";

export const getVideos = async () => {
    try {
        const myInit = {
            headers: {
                'Content-Type' : 'application/json',
            }
        };
        const res = await API.get("teo", "/videos", myInit);
        return res;
    } catch (e) {
        console.log(e);
    }
}