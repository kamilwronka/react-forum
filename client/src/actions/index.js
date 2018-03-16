import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/forum';

export const FETCH_CATEGORIES = 'fetch_categories';
export const CREATE_CATEGORY = 'create_category';
export const FETCH_THREADS = 'fetch_threads';

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`);

    return {
        type: FETCH_CATEGORIES,
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

export function fetchThreads() {
    const request = axios.get(`${ROOT_URL}/threads`);

    return {
        type: FETCH_THREADS,
        payload: request
    }
}