import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
  });

export const getUser = (id) => (dispatch) => (
    APIUtil.getUser(id).then(user => dispatch(receiveCurrentUser(user)))
)

export const updateUser = (user) => (dispatch) => (
    APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
)
