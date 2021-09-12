import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModal } from '../../../actions/modal_actions';
import { fetchAllExperiences } from '../../../actions/experience_actions';
import ExperienceIndex from './experience_index'

const mSTP = (state, ownProps) => {
    return {
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        experiences: Object.values(state.entities.experiences)
    }

};

const mDTP = (dispatch) => ({
    showModal: (modal, id) => dispatch(showModal(modal, id)),
    fetchAllExperiences: (userId) => dispatch(fetchAllExperiences(userId))


});
  
export default withRouter(connect(mSTP, mDTP)(ExperienceIndex));