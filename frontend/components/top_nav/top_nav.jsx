import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component{

    constructor(props) {
        super(props); 
        this.state = {show: false }
        this.props = props
        this.dropShow = this.dropShow.bind(this); 
        this.dropHide = this.dropHide.bind(this);
    }


    dropShow() {
        this.setState({show: true})
    }

    dropHide(){
        this.setState({show: false})
    }

    render(){
        return(
            <div className='top-nav'>
                <div className='left-nav'>
                    <div className='logo-nav'>
                        <Link to='/feed'>
                            <img className='u-logo' src={window.uLogo} />
                        </Link>
                    </div>
                </div>
                <div className='right-nav'>
                    <div className='home-nav icon'>
                        <Link to='/feed'>
                            <i className="fas fa-home"></i>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className='network-nav icon'>
                        <i className="fas fa-user-friends"></i>
                        <p>My Network</p>
                    </div>
                    <div className='jobs-nav icon'>
                        <i className="fas fa-briefcase"></i>
                        <p>Job</p>

                    </div>
                    <div className='message-nav icon'>
                        <i className="fas fa-comment-dots"></i>
                        <p>Messaging</p>
                    </div>
                    <div className='notification-nav icon'>
                        <i className="fas fa-bell"></i>
                        <p>Notification</p>

                    </div>
                    <div className='me-nav icon'>
                        <button className='nav-dropdown-btn' onFocus={this.dropShow} onBlur={this.dropHide}>
                            <div className='profile-pic-div'>
                                <img src={window.profileDefault} className='profile-pic-nav'/>
                                <p>Me <i className="fas fa-caret-down"></i></p>
                            </div>
                            <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                                <div className='dropdown-top'>
                                    <div className='user-info-div'>
                                        <img src={window.profileDefault} className='profile-pic-dropdown'/>
                                        <div className='user-detail'>
                                            <h3>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                                            <h4>{this.props.currentUser.headline}</h4>
                                        </div>
                                    </div>
                                    <div className='view-profile-div' onClick={()=> {this.props.history.push(`/users/${this.props.currentUser.id}`);
                                                        this.dropHide()}}>
                                        <h3 className='view-profile-msg'>View Profile</h3>
                                    </div>
                                </div>


                                <div className='logout-btn' onClick={this.props.logout}>
                                    <h3>Sign Out</h3>
                                </div>
                            </ul>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default TopNav;