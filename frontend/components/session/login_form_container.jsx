import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = ({ errors}, ownProps) => ({
    errors: errors.session,
    formType: 'Sign in',
    navLink: <Link to="/signup">sign up</Link>,
    currentLocation: ownProps.location,
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
