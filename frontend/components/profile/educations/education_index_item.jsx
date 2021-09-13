import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal } from '../../../actions/modal_actions';

const EducationIndexItem = ({education, showModal, currentUser, match})  => {
    let editButton;
    if (currentUser.id == match.params.userId) {
        editButton = (<div className='edit-btn' onClick={() => {return showModal('editEducation', education.id)}} >
        <i className="fas fa-pencil-alt" ></i></div>)
    }else{
        editButton = null;
    }
    return(
        <div className='created-education-div'>
            <img src={window.educationImg} className='education-img' />

            <div className='education-info'>
                <div className='school-info'>
                    <p>{education.school}</p>
                </div>
                

                <div className='degree-field-grade-info'>
                    <p>{education.degree}</p>
                    <p>{education.degree ? ',' : ''} {education.field}</p>
                    <p>{education.field ? ',' : ''} {education.grade}</p>
                </div>

                <div className='date-info'>
                    <p>{education.startDate} - {education.endDate}</p>
                </div>

                
                <div className='activity-description-info'>
                    <p>Activities and Societies: {education.activities}</p>
                    <br />
                    <p>{education.description}</p>
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

export default withRouter(connect(mSTP, mDTP)(EducationIndexItem));