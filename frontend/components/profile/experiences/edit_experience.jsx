import { connect } from 'react-redux';
import { updateExperience, deleteExperience } from '../../../actions/experience_actions';
import { hideModal } from '../../../actions/modal_actions';
import ExperienceForm from './experience_form';

const mSTP = (state) => {
    return {
        formType: 'Edit Experience',
        experience: state.entities.experiences[state.ui.idFinder],
    }

};
  
const mDTP = (dispatch) => ({
    action: (experience) => dispatch(updateExperience(experience)),
    deleteExperience: (experienceId) => dispatch(deleteExperience(experienceId)),
    hideModal: () => dispatch(hideModal()),
});
  
const EditExperienceForm = connect(mSTP, mDTP)(ExperienceForm);
  
export default EditExperienceForm;