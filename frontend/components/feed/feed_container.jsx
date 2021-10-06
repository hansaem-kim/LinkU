import { connect } from "react-redux";
import React from "react";
import { showModal } from "../../actions/modal_actions";
import { fetchAllPosts } from "../../actions/post_actions";
import { getUsers } from '../../actions/user_actions';
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
    getUsers: () => dispatch(getUsers()),
    showModal: (modal) => dispatch(showModal(modal))

});

export default connect(mSTP, mDTP)(Feed);