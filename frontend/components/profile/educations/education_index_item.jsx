import React from 'react';
import { connect } from 'react-redux';

const EducationIndexItem = () => {
    return(
        <div>
            <p>Education 1</p>
        </div>
    )
}

const mSTP = (state, ownProps) => ({
    profileUser: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({

});

export default EducationIndexItem;