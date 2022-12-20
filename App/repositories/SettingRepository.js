import { client, clientFromdata, BASEAPI } from './Repository';

export async function login(params) {
    var endPoint = `${BASEAPI}/api/user/login`;
    const reponse = await client().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
export async function register(params) {
    var endPoint = `${BASEAPI}/api/user/register`;
    // console.log(endPoint);
    const reponse = await clientFromdata().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
export async function updateProfile(params) {
    var endPoint = `${BASEAPI}/api/user/update`;
    // console.log(endPoint);
    const reponse = await clientFromdata().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
export async function profile(user) {
    var endPoint = `${BASEAPI}/api/user/profile?username=${user}`;
    const reponse = await clientFromdata().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}