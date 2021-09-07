import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component{

    render(){
        return(
            <div className='top-nav'>
                <div className='left-nav'>
                    <div className='logo-nav'>
                        <Link to='/'>
                            <img className='u-logo' src={window.uLogo} />
                        </Link>
                    </div>
                </div>
                <div className='right-nav'>
                    <div className='home-nav icon'>
                        <i className="fas fa-home"></i>
                        <p>Home</p>
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
                        <ul>
                            <li onClick={this.props.logout}>
                                <Link to={'/'}>Log Out</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default TopNav;