import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/forum';

export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_CATEGORY = 'fetch_category';
export const CREATE_CATEGORY = 'create_category';
export const CREATE_THREAD = 'create_thread';
export const FETCH_THREADS = 'fetch_threads';

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchCategory(id) {
    const request = axios.get(`${ROOT_URL}/category/${id}`);

    return {
        type: FETCH_CATEGORY,
        payload: request
    }
}

export function createCategory(values, callback) {
    console.log(values);
    const request = axios.post(`${ROOT_URL}/categories`, values)
        .then(() => callback());

    console.log(request);

    return {
        type: CREATE_CATEGORY,
        payload: request
    }
}

export function fetchThreads(cat_id) {
    const request = axios.get(`${ROOT_URL}/categories/${cat_id}`);

    return {
        type: FETCH_THREADS,
        payload: request
    }
}

export function createThread(values, callback) {
    console.log(values);
    const request = axios.post(`${ROOT_URL}/threads`, values)
        .then(() => callback());

    console.log(request);

    return {
        type: CREATE_THREAD,
        payload: request
    }
}
