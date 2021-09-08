import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSession = this.handleDemoSession.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoSession(e) {
        e.preventDefault();
        this.props.processForm({
            email: "test1@gmail.com",
            password: 'hansaem',
            first_name: 'Hansaem',
            last_name: 'Kim',
        })
    }

    renderErrors() {
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        return (
        <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    placeholder="Email"
                />
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                />
                <input className="session-submit-btn" type="submit" value={this.props.formType} />
                <button className="session-submit-btn" onClick={this.handleDemoSession}> Demo Sign in </button>
            </div>
            </form>
        </div>
        );
    }
}

export default LoginForm;
