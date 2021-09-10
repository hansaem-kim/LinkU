import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component{

    constructor(props) {
        super(props); 
        this.state = {show: false }

        this.dropShow = this.dropShow.bind(this); 
        this.dropHide = this.dropHide.bind(this);
    }


    dropShow(e) {
        this.setState({show: true})
    }

    dropHide(e){
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
                    <div className='me-nav icon' onMouseLeave={this.dropHide}>
                        <button className='nav-dropdown-btn' onClick={this.dropShow}>
                            ICON
                            <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                                <li>
                                    <div>
                                        <h3>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                                    </div>
                                    <div>
                                        <Link to={`/users/${this.props.currentUser.id}`} className='view-profile-btn'>
                                            <h3 className='view-profile-msg'>View Profile</h3>
                                        </Link>
                                    </div>
                                    <div className='logout-btn' onClick={this.props.logout}>
                                        <h3>Log Out</h3>
                                    </div>
                                </li>
                            </ul>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default TopNav;