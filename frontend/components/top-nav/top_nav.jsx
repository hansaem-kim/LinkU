import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component{

    render(){
        return(
            <div className='top-nav'>
                <div className='logo-nav'>

                </div>
                <div className='home-nav'>

                </div>
                <div className='network-nav'>

                </div>
                <div className='jobs-nav'>

                </div>
                <div className='message-nav'>

                </div>
                <div className='notification-nav'>

                </div>
                <div className='me-nav'>
                    <ul>
                        <li onClick={this.props.logout}>
                            <Link to={'/'}>Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopNav;