import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal } from '../../../actions/modal_actions';

const AboutIndexItem = ({about, showModal, currentUser, match})  => {
    let editButton;
    if (currentUser.id == match.params.userId) {
        editButton = (<div className='edit-btn' onClick={() => {return showModal('editAbout', about.id)}} >
        <i className="fas fa-pencil-alt" ></i></div>)
    }else{
        editButton = null;
    }

    return(
        <div className='created-about-div'>
            <div className='about-info'>
                <div className='body-info'>
                    <i className="fas fa-bullseye"></i>
                    <p>{about.body}</p>
                </div>
            </div>

            <footer>
                {editButton}
            </footer>
        </div>
    )
};

const mSTP = (state, ownProps) => ({
    profileUser: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({
    showModal: (modal, id) => dispatch(showModal(modal, id))
});

export default withRouter(connect(mSTP, mDTP)(AboutIndexItem));