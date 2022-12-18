import { client, clientFromdata } from './Repository';
import { BASEAPI } from '@env';

export async function searchRoom(params) {
    var endPoint = `${BASEAPI}/api/book/search-available?checkin=${params.checkin}&checkout=${params.checkout}&typeRoom=${params.typeRoom}&maxPrice=${params.maxPrice}`;
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
    var endPoint = `${BASEAPI}/api/book/room`;
    // console.log(endPoint);
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
    var endPoint = `${BASEAPI}/api/book/room/${id}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}

export async function checkRoomNumber(params) {
    var endPoint = `${BASEAPI}/api/book/checkBooking?checkin=${params.checkin}&checkout=${params.checkout}&room=${params.roomNumber}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}

export async function history(user) {
    var endPoint = `${BASEAPI}/api/book/booking-history?user=${user}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}

export async function booking(params) {
    var endPoint = `${BASEAPI}/api/book/booking`;
    console.log(endPoint);
    const reponse = await clientFromdata().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}
