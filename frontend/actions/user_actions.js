import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const getUser = (id) => (dispatch) => (
    APIUtil.getUser(id).then(
        user => dispatch(receiveUser(user)),
        err => dispatch(receiveErrors(err))
    )
)

export const updateUser = (user) => (dispatch) => (
    APIUtil.updateUser(user).then(
        user => dispatch(receiveUser(user))
    )
)
