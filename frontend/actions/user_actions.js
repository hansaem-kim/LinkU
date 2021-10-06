import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const getUser = (id) => (dispatch) => (
    APIUtil.getUser(id).then(user => dispatch(receiveCurrentUser(user)))
)

export const getUsers = () => (dispatch) => (
    APIUtil.getUsers().then(users => dispatch(receiveUsers(users)))
)

export const updateUser = (user) => (dispatch) => (
    APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
)
