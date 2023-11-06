import { API } from "aws-amplify";

export const getPhotos = async () => {
    try {
        const myInit = {
            headers: {
                'Content-Type' : 'application/json',
            }
        };
        const res = await API.get("teo", "/photos", myInit);
        return res;
    } catch (e) {
        console.log(e);
    }
}