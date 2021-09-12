import { connect } from 'react-redux';
import { updateAbout, deleteAbout } from '../../../actions/about_actions';
import { hideModal } from '../../../actions/modal_actions';
import AboutForm from './about_form';

const mSTP = (state) => {
    return {
        formType: 'Edit Goal',
        about: state.entities.abouts[state.ui.idFinder],
    }

};
  
const mDTP = (dispatch) => ({
    action: (about) => dispatch(updateAbout(about)),
    deleteAbout: (aboutId) => dispatch(deleteAbout(aboutId)),
    hideModal: () => dispatch(hideModal()),
});
  
const EditAboutForm = connect(mSTP, mDTP)(AboutForm);
  
export default EditAboutForm;