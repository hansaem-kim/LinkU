import { RECEIVE_ALL_EXPERIENCES, RECEIVE_EXPERIENCE, REMOVE_EXPERIENCE } from '../actions/experience_actions';

const experienceReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_EXPERIENCES:
        return { ...state, ...action.experiences };
    case RECEIVE_EXPERIENCE:
        return Object.assign({}, state, {[action.experience.id]: action.experience})
    case REMOVE_EXPERIENCE:
        let nextState = { ...state };
        delete nextState[action.experienceId];
        return nextState;
    default:
        return state;
  }
};

export default experienceReducer;
