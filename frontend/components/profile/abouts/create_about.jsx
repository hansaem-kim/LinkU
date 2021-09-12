import { connect } from 'react-redux';
import { createAbout } from '../../../actions/about_actions';
import { hideModal } from '../../../actions/modal_actions';
import AboutForm from './about_form.jsx';


const mSTP = (state) => {
    return({
        about: {
            user_id: state.session.id,
            body: "",
        },
        formType: 'Add Goal'
    })
};

const mDTP = dispatch => ({
    action: (about) => dispatch(createAbout(about)),
    hideModal: () => dispatch(hideModal()),
});

const CreateAboutForm = connect(mSTP, mDTP)(AboutForm);

export default CreateAboutForm;