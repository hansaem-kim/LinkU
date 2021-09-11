import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModal } from '../../../actions/modal_actions';
import { fetchAllEducations } from '../../../actions/education_actions';
import EducationIndex from './education_index'

const mSTP = (state, ownProps) => {
    return {
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        educations: Object.values(state.entities.educations)
    }

};

const mDTP = (dispatch) => ({
    showModal: (modal, id) => dispatch(showModal(modal, id)),
    fetchAllEducations: (userId) => dispatch(fetchAllEducations(userId))


});
  
export default withRouter(connect(mSTP, mDTP)(EducationIndex));