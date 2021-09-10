import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const postReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            newState = action.posts
            return newState;
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState
        default:
            return state;
    }
}

export default postReducer;