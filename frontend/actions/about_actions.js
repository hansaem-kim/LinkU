import * as APIUtil from '../util/about_api_util';

export const RECEIVE_ALL_ABOUTS = 'RECEIVE_ALL_ABOUTS';
export const RECEIVE_ABOUT = 'RECEIVE_ABOUT';
export const REMOVE_ABOUT = 'REMOVE_ABOUT';

const receiveAllAbouts = (abouts) => ({
    type: RECEIVE_ALL_ABOUTS,
    abouts
});

const receiveAbout = (about) => ({
    type: RECEIVE_ABOUT,
    about
});

const removeAbout = (aboutId) => ({
    type: REMOVE_ABOUT,
    aboutId
});

export const fetchAllAbouts = (userId) => dispatch => (
    APIUtil.fetchAllAbouts(userId).then(abouts => dispatch(receiveAllAbouts(abouts)))
);

export const createAbout = (about) => dispatch => (
    APIUtil.createAbout(about).then(about => dispatch(receiveAbout(about)))
);

export const updateAbout = (about) => dispatch => (
    APIUtil.updateAbout(about).then(about => dispatch(receiveAbout(about)))
);

export const deleteAbout = (aboutId) => dispatch => (
    APIUtil.deleteAbout(aboutId).then(() => dispatch(removeAbout(aboutId)))
);