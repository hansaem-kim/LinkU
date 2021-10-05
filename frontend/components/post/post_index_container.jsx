import { connect } from "react-redux";
import PostIndex from './post_index';
import { fetchAllPosts, destroyPost } from "../../actions/post_actions";
import { fetchAllComments } from "../../actions/comment_actions";
import { hideModal } from "../../actions/modal_actions";

const mSTP = (state) => {
    return ({
        posts: Object.values(state.entities.posts).reverse(),
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = (dispatch) => ({
    fetchAllPosts: () => (dispatch(fetchAllPosts())),
    fetchAllComments: () => (dispatch(fetchAllComments())),
    destroyPost: (postId) => (dispatch(destroyPost(postId))),
    hideModal: () => dispatch(hideModal()),
});

export default connect(mSTP, mDTP)(PostIndex);