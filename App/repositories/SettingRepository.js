import { baseUrl, client } from './Repository';
import { BASEAPI } from '@env';

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
    const reponse = await client().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}