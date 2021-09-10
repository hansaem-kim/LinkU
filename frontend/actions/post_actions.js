import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchAllPosts = () => dispatch => (
    APIUtil.fetchAllPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const createPost = (post) => dispatch => (
    APIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = (post) => dispatch => (
    APIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const destroyPost = (postId) => dispatch => (
    APIUtil.destroyPost(postId).then(() => dispatch(removePost(postId)))
);