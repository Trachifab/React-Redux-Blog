import axios from 'axios';
import _ from 'lodash';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';
const USER_ID = '1';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?userId=${USER_ID}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {

    values.userId = USER_ID

    const request = axios.post(`${ROOT_URL}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}