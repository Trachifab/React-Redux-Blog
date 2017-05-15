import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DUMMYKEYFORTESTING'

const config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`, config);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values, config)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}