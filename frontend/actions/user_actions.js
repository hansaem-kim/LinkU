import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const getUser = (id) => (dispatch) => (
    APIUtil.getUser(id).then(user => dispatch(receiveUser(user)))
)

export const getUsers = () => (dispatch) => (
    APIUtil.getUsers().then(users => dispatch(receiveUsers(users)))
)

export const updateUser = (user) => (dispatch) => (
    APIUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
)
