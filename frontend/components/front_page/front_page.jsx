import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';


const FrontPage = () => {
    
    return(
        <div className='front-page'>
            <div className ='front-page-nav'>
                <img className='linku-logo' src={window.linkuLogo} />
                <div className="session-nav">
                    <Link className="joinnow" to="/signup">Join now</Link>
                    <Link className="signin" to="/login">Sign in</Link>
                </div>
            </div>
            <section className = 'welcome-section'>
                <div className = 'welcome-section-left'>
                    <h2 className = 'welcome-message'>Welcome to your <br/> professional community</h2>
                    <LoginFormContainer />
                </div>
                <img className = 'welcome-img' src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="welcome-img" />

            </section>
            <section className = 'join-section'>
                <h2 className='join-message'>Join your colleagues, classmates, and friends on LinkU.</h2>
            </section>


        </div>
    )
};

export default FrontPage;