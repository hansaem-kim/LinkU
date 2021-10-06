import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { fetchAllComments } from "../../actions/comment_actions";


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: {
        user_id: state.session.id,
        post_id: ownProps.postId,
        body: ""
    },
    postId: ownProps.postId,
    formType: "Create Comment",
});

const mDTP = (dispatch) => ({
    action: (comment) => (dispatch(createComment(comment))),
    fetchAllComments: () => (dispatch(fetchAllComments())),

});

export default connect(mSTP,mDTP)(CommentForm);