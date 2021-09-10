import { connect } from "react-redux";
import PostIndex from './post_index';
import { fetchAllPosts, destroyPost } from "../../actions/post_actions";

const mSTP = (state) => {
    return ({
        posts: Object.values(state.entities.posts)
    })
}

const mDTP = (dispatch) => ({
    fetchAllPosts: () => (dispatch(fetchAllPosts())),
    destroyPost: (postId) => (dispatch(destroyPost(postId)))
});

export default connect(mSTP, mDTP)(PostIndex);