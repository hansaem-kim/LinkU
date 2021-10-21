import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }, ownProps) => ({
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">log in</Link>,
    currentLocation: ownProps.location,
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
