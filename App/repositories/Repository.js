import axios from 'axios';

export const BASEAPI = 'http://192.168.95.84:9596';

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const CONTENT_TYPE = {
    'Content-Type': "multipart/form-data"
};

export const baseUrl = `${BASEAPI}/api`;

export const client = (token) => {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            "content-type": "application/json",
        },
        timeout: 10000
    });
}

export const clientFromdata = (token) => {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            "content-type": "multipart/form-data",
        },
        timeout: 10000
    });
}

export default axios.create({
    baseUrl,
    headers: CONTENT_TYPE,
    timeout: 10000
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};