import { connect } from 'react-redux';
import { createExperience } from '../../../actions/experience_actions';
import { hideModal } from '../../../actions/modal_actions';
import ExperienceForm from './experience_form.jsx';


const mSTP = (state) => {
    return({
        experience: {
            user_id: state.session.id,
            title: "",
            employment_type: "",
            company: "",
            location: "",
            start_date: "",
            end_date: "",
            headline: "",
            industry: "",
            description: ""
        },
        formType: 'Add Experience'
    })
};

const mDTP = dispatch => ({
    action: (experience) => dispatch(createExperience(experience)),
    hideModal: () => dispatch(hideModal()),
});

const CreateExperienceForm = connect(mSTP, mDTP)(ExperienceForm);

export default CreateExperienceForm;