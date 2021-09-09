import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import CreateEducationForm from '../profile/educations/create_education';

const mSTP = (state) => ({
    modal: state.ui.modal
});

const mDTP = (dispatch) => ({
    hideModal: () => dispatch(hideModal())
});

const Modal = ({ modal, hideModal }) => {

    if (!modal) return null;

    let component;
    
    switch(modal){
        case 'createEducation':
            component = <CreateEducationForm />;
            break;
        case 'editEducation':
            component = <EditEducationForm />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-div' onClick={hideModal}>
            <div className='modal-component-div' onClick={e => e.stopPropagation()}>
                { component }
            </div>
      </div>
    );
}

export default connect(mSTP, mDTP)(Modal);