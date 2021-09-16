import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { hideModal} from '../../actions/modal_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    post: {
        author_id: state.session.id,
        body: ""
    },
    formType: "Create Post",
    modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
    action: (post) => (dispatch(createPost(post))),
    hideModal: () => dispatch(hideModal()),
});

export default connect(mSTP,mDTP)(PostForm);