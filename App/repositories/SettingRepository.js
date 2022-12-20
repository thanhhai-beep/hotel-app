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