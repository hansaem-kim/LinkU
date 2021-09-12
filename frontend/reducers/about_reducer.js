import { RECEIVE_ALL_ABOUTS, RECEIVE_ABOUT, REMOVE_ABOUT } from '../actions/about_actions';

const aboutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ABOUTS:
        return { ...state, ...action.abouts };
    case RECEIVE_ABOUT:
        return Object.assign({}, state, {[action.about.id]: action.about})
    case REMOVE_ABOUT:
        let nextState = { ...state };
        delete nextState[action.aboutId];
        return nextState;
    default:
        return state;
  }
};

export default aboutReducer;
