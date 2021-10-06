import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import { fetchAllComments } from "../../actions/comment_actions";


const mSTP = (state, ownProps) => {
    return ({
        postId: ownProps.postId,
        currentUser: state.entities.users[state.session.id],

    })
}

const mDTP = (dispatch) => ({
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchAllComments: () => (dispatch(fetchAllComments())),

});

export default connect(mSTP, mDTP)(CommentIndex);