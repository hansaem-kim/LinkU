import { RECEIVE_ALL_EDUCATIONS, RECEIVE_EDUCATION, REMOVE_EDUCATION } from '../actions/education';

const educationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_EDUCATIONS:
        return { ...state, ...action.educations };
    case RECEIVE_EDUCATION:
        return Object.assign({}, state, {[action.education.id]: action.education})
    case REMOVE_EDUCATION:
        let nextState = { ...state };
        delete nextState[action.educationId];
        return nextState;
    default:
        return state;
  }
};

export default educationsReducer;
