import { baseUrl, client } from './Repository';

export async function searchRoom(params) {
    const endPoint = `${baseUrl}/book/search-available?checkin=${params.checkin}&checkout=${params.checkout}&typeRoom=${params.typeRoom}&maxPrice=${params.maxPrice}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
export async function roomDefault() {
    const endPoint = `${baseUrl}/book/room`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
export async function getRoomDetail(id) {
    const endPoint = `${baseUrl}/book/room/${id}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}