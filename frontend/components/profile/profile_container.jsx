import { connect } from 'react-redux';
import Profile from './profile'
import { getUser } from '../../actions/user_actions'
import { showModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return{
        educations: state.entities.educations,
        experiences: state.entities.experiences,
        abouts: state.entities.abouts,
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
    showModal: (modal, id) => dispatch(showModal(modal, id)),
    
})

export default connect(mSTP, mDTP)(Profile); 