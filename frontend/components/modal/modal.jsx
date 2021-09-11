import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal_actions';
import CreateEducationForm from '../profile/educations/create_education';
import EditEducationForm from '../profile/educations/edit_education';
import CreatePostForm from '../post/create_post_form_container';


const mSTP = (state) => ({
    modal: state.ui.modal
});

const mDTP = (dispatch) => ({
    hideModal: () => dispatch(hideModal())
});

const Modal = (state) => {
    const modal = state.modal;
    if (!modal) return null;

    let component;
    switch(modal){
        case 'createEducation':
            component = <CreateEducationForm />;
            break;
        case 'editEducation':
            component = <EditEducationForm />;
            break;
        case 'createPost':
            component = <CreatePostForm />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-div'>
            <div className='modal-component-div' onClick={e => e.stopPropagation()}>
                { component }
            </div>
      </div>
    );
}

export default connect(mSTP, mDTP)(Modal);