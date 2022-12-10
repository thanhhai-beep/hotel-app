import { baseUrl, client } from './Repository';

export async function login(params) {
    const endPoint = `${baseUrl}/user/login`;
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
    const endPoint = `${baseUrl}/user/register`;
    const reponse = await client().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}