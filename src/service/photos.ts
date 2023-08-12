import { API, Auth } from "aws-amplify";

export const getPhotos = async () => {
    const token = (await Auth.currentSession()).getIdToken().getJwtToken();

    try {
        const myInit = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: token,
            }
        };
        const res = await API.get("teo", "/photos", myInit);
        return res;
    } catch (e) {
        console.log(e);
    }
}