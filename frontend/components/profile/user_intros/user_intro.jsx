import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModal } from '../../../actions/modal_actions';
import { getUser } from '../../../actions/user_actions';


const mSTP = (state, ownProps) => {
    return{
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = (dispatch) => {
    return {
        showModal: (modal, id) => dispatch(showModal(modal, id)),
        getUser: (id) => dispatch(getUser(id)),
    }
}


class UserIntro extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getUser(this.props.profileUser.id);
    }

    render(){
        let editButton;
        if (this.props.currentUser.id === this.props.profileUser.id) {
            editButton = (<div className='edit-btn' onClick={() => {return this.props.showModal('editUserIntro', this.props.currentUser.id)}} >
            <i className="fas fa-pencil-alt" ></i></div>)
        }else{
            editButton = null;
        }
        return(
            <div className='user-info'>
                <div className='background-img-div'>
                    <img className="background-img" src={window.profileBackground} />
                </div>
                <div className='user-photo'>
                    <img src={window.profileDefault} />
                </div>
                <div className='user-detail'>
                    <header>
                        <div className='user-name'>
                            <h2>{this.props.profileUser.first_name} {this.props.profileUser.last_name} ({this.props.profileUser.pronouns})</h2>
                        </div>
                        {editButton}
                    </header>
                    <div className='user-headline'>
                        <h3>{this.props.profileUser.headline}</h3>
                    </div>
                    <div className='user-location'>
                        <p>{this.props.profileUser.location}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(UserIntro));