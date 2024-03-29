import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModal } from '../../../actions/modal_actions';
import { fetchAllAbouts } from '../../../actions/about_actions';
import AboutIndex from './about_index'

const mSTP = (state, ownProps) => {
    return {
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        abouts: Object.values(state.entities.abouts).reverse()
    }

};

const mDTP = (dispatch) => ({
    showModal: (modal, id) => dispatch(showModal(modal, id)),
    fetchAllAbouts: (userId) => dispatch(fetchAllAbouts(userId))


});
  
export default withRouter(connect(mSTP, mDTP)(AboutIndex));