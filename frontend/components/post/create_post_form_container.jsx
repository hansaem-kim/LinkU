import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    post: {
        author_id: state.session.id,
        body: ""
    },
    formType: "Create Post"
});

const mDTP = (dispatch) => ({
    action: (post) => (dispatch(createPost(post)))
});

export default connect(mSTP,mDTP)(PostForm);