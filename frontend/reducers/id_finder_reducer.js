import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const idFinderReducer = (state = null, action) => {
    Object.freeze(state);
  switch (action.type) {
    case SHOW_MODAL:
      return action.id;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
};

export default idFinderReducer;