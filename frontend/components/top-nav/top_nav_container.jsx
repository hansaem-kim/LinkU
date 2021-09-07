import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import TopNav from './top_nav';


const mSTP = (state) => ({
    session: state.session,
    users: state.entities.users,
    currentuser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(TopNav); 