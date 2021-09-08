import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EducationIndex from './education_index'

const mSTP = (state, ownProps) => ({
    profileUser: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({

});
  
export default withRouter(connect(mSTP, mDTP)(EducationIndex));