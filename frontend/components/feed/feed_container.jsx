import { connect } from "react-redux";
import { showModal } from "../../actions/modal_actions";
import { fetchAllPosts } from "../../actions/post_actions";
import { getUsers } from '../../actions/user_actions';
import { fetchConnections } from '../../actions/connection_actions';

import Feed from './feed'

const mSTP = (state) => {
    const posts = state.entities.posts;
    const currentUser = state.entities.users[state.session.id];
    
    return ({
        posts,
        currentUser,
        connections: Object.values(state.entities.connections)

    })
};

const mDTP = (dispatch) => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    getUsers: () => dispatch(getUsers()),
    showModal: (modal) => dispatch(showModal(modal)),
    fetchConnections: (userId) => dispatch(fetchConnections(userId)),


});

export default connect(mSTP, mDTP)(Feed);