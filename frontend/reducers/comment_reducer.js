import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            newState[action.comment[Object.keys(action.comment)].id] = action.comment[Object.keys(action.comment)]
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState
        default:
            return state;
    }
}

export default commentReducer;