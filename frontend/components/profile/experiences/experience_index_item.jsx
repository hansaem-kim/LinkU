import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal } from '../../../actions/modal_actions';

const ExperienceIndexItem = ({experience, showModal, currentUser, match})  => {
    let editButton;
    if (currentUser.id == match.params.userId) {
        editButton = (<div className='edit-btn' onClick={() => {return showModal('editExperience', experience.id)}} >
        <i className="fas fa-pencil-alt" ></i></div>)
    }else{
        editButton = null;
    }
    return(
        <div className='created-experience-div'>
            <img src={window.experienceImg} className='experience-img' />

            <div className='experience-info'>
                <div className='title-info'>
                    <p>{experience.title}</p>
                </div>
                

                <div className='company-employment-info'>
                    <p>{experience.company}</p>
                    <p>. {experience.employmentType}</p>
                </div>

                <div className='date-info'>
                    <p>{experience.startDate} - {experience.endDate}</p>
                </div>

                <div className='location-info'>
                    <p>{experience.location}</p>
                </div>

                
                <div className='description-info'>
                    <br />
                    <p>{experience.description}</p>
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

export default withRouter(connect(mSTP, mDTP)(ExperienceIndexItem));