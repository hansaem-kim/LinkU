import { connect } from 'react-redux';
import { updateEducation, deleteEducation } from '../../../actions/education';
import EducationForm from './education_form';

const mSTP = ({ entities: { educations } }) => ({
    educations,
    formType: 'Edit Education'
});
  
const mDTP = (dispatch) => ({
    action: (education) => dispatch(updateEducation(education)),
    deleteEducation: (educationId) => dispatch(deleteEducation(educationId))
});
  
const EditEducationForm = connect(mSTP, mDTP)(EducationForm);
  
export default EditEducationForm;