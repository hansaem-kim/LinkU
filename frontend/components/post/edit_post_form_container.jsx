import { connect } from 'react-redux';
import { hideModal} from '../../actions/modal_actions';
import { updatePost } from '../../actions/post_actions';
import PostForm from './post_form';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        formType: 'Edit Post',
        post: state.entities.posts[state.ui.idFinder],
        modal: state.ui.modal,
    }

};
  
const mDTP = (dispatch) => ({
    action: (post) => (dispatch(updatePost(post))),
    hideModal: () => dispatch(hideModal()),
});
  
export default connect(mSTP, mDTP)(PostForm);
  
