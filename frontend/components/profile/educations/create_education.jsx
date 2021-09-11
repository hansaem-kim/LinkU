import { connect } from 'react-redux';
import { createEducation } from '../../../actions/education_actions';
import { hideModal } from '../../../actions/modal_actions';
import EducationForm from './education_form.jsx';


const mSTP = (state) => {
    return({
        education: {
            user_id: state.session.id,
            school: "",
            degree: "",
            field: "",
            start_date: "",
            end_date: "",
            grade: "",
            activities: "",
            description: ""
        },
        formType: 'Add Education'
    })
};

const mDTP = dispatch => ({
    action: (education) => dispatch(createEducation(education)),
    hideModal: () => dispatch(hideModal()),
});

const CreateEducationForm = connect(mSTP, mDTP)(EducationForm);

export default CreateEducationForm;