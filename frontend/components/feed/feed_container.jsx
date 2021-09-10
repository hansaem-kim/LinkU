import { connect } from "react-redux";
import React from "react";
import { showModal } from "../../actions/modal_actions";
import { fetchAllPosts } from "../../util/post_api_util";
import Feed from './feed'

const mSTP = (state) => {
    const posts = state.entities.posts;
    const currentUser = state.entities.users[state.session.id];
    return ({
        posts,
        currentUser
    })
};

const mDTP = (dispatch) => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    showModal: (modal) => dispatch(showModal(modal))

});

export default connect(mSTP, mDTP)(Feed);