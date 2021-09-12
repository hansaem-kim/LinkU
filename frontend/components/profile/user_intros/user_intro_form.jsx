import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/user_actions';
import { hideModal } from '../../../actions/modal_actions';

const mSTP = (state) => {
    return{
        currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = (dispatch) => {
    return{
        updateUser: (user) => dispatch(updateUser(user)),
        hideModal: () => dispatch(hideModal()),
    }
    
}

class EditUserIntro extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser({
            ...this.state
        });
        this.props.hideModal();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        return(
            <div className='user-intro-form'>
                <header>
                    <h3>Edit Intro</h3>
                    <div className='close-btn' onClick={()=> this.props.hideModal()}>
                        <i className="fas fa-times"></i>
                    </div>
                </header>
                <div className='form-body'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="name-div ex-form-sub">
                            <label>First Name*</label>
                            <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                            <label>Last Name*</label>
                            <input type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                        </div>

                        <div className='pronouns-div ex-form-sub'>
                            <label>Pronouns</label>
                            <div className='pronouns-selector'>
                                <select onChange={this.update('pronouns')}>
                                    <option defaultValue>Please select</option> 
                                    <option>She/Her</option>
                                    <option>He/Him</option>
                                    <option>They/Them</option>
                                </select>
                            </div>
                        </div>

                        <div className = 'headline-div ex-form-sub'>
                            <label>Headline</label>
                            <input type="text" value={this.state.headline} onChange={this.update('headline')}/>
                        </div>

                        <div className="location-div ex-form-sub">
                            <label>Location</label>
                            <input type="text" placeholder="Ex: London, United Kingdom" value={this.state.location} onChange={this.update('location')}/>
                        </div>
                    </form>
                </div>
            
                <footer>
                    <button className='user-intro-create-btn' onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(EditUserIntro);