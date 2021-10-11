import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION } from "../actions/connection_actions";

const connectionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CONNECTIONS:
            return action.connections;
        case RECEIVE_CONNECTION:
            return { ...state, ...action.connections};
        case REMOVE_CONNECTION:
            let nextState = { ...state };
            delete nextState[action.connectionId];
            return nextState;
        default:
            return state;
    }
};

export default connectionReducer;