import { client, clientFromdata, BASEAPI } from './Repository';

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
    console.log(endPoint);
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
    console.log(endPoint);
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
    console.log(endPoint);
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

export async function booking(params) {
    var endPoint = `${BASEAPI}/api/book/booking`;
    const reponse = await clientFromdata().post(endPoint, params)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}

export async function roomType(type) {
    var endPoint = `${BASEAPI}/api/book/room-type?type=${type}`;
    const reponse = await client().get(endPoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response?.data;
        });
    return reponse;
}