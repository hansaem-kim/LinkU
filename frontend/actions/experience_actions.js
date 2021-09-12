import * as APIUtil from '../util/experience_api_util';

export const RECEIVE_ALL_EXPERIENCES = 'RECEIVE_ALL_EXPERIENCES';
export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';
export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

const receiveAllExperiences = (experiences) => ({
    type: RECEIVE_ALL_EXPERIENCES,
    experiences
});

const receiveExperience = (experience) => ({
    type: RECEIVE_EXPERIENCE,
    experience
});

const removeExperience = (experienceId) => ({
    type: REMOVE_EXPERIENCE,
    experienceId
});

export const fetchAllExperiences = (userId) => dispatch => (
    APIUtil.fetchAllExperiences(userId).then(experiences => dispatch(receiveAllExperiences(experiences)))
);

export const createExperience = (experience) => dispatch => (
    APIUtil.createExperience(experience).then(experience => dispatch(receiveExperience(experience)))
);

export const updateExperience = (experience) => dispatch => (
    APIUtil.updateExperience(experience).then(experience => dispatch(receiveExperience(experience)))
);

export const deleteExperience = (experienceId) => dispatch => (
    APIUtil.deleteExperience(experienceId).then(() => dispatch(removeExperience(experienceId)))
);