import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'log-in',
    navLink: <Link to="/signup">sign up</Link>,
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
