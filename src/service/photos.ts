import { API } from "aws-amplify";

export const getPhotos = async () => {
    try {
        const init = {
            headers: {
                'Content-Type' : 'application/json',
            }
        };
        const res = await API.get("teo", "/photos", init);
        return res;
    } catch (e) {
        console.log(e);
    }
}