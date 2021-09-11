import { connect } from 'react-redux';
import { updateEducation, deleteEducation } from '../../../actions/education_actions';
import { hideModal } from '../../../actions/modal_actions';
import EducationForm from './education_form';

const mSTP = (state) => {
    return {
        formType: 'Edit Education',
        education: state.entities.educations[state.ui.idFinder],
    }

};
  
const mDTP = (dispatch) => ({
    action: (education) => dispatch(updateEducation(education)),
    deleteEducation: (educationId) => dispatch(deleteEducation(educationId)),
    hideModal: () => dispatch(hideModal()),
});
  
const EditEducationForm = connect(mSTP, mDTP)(EducationForm);
  
export default EditEducationForm;