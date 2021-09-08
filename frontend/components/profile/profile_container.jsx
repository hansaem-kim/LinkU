import { connect } from 'react-redux';
import Profile from './profile'
import { getUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
    profileUser: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({
    getUser: (id) => dispatch(getUser(id)),
})

export default connect(mSTP, mDTP)(Profile); 