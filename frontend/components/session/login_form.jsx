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
            <li className='session-error-msg' key={`error-${i}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        const singinGreeting = (<div className='greeting'>
                                    <h1>Sign in</h1>
                                    <p>Stay updated on your professional world</p>
                                </div>
        )

        let greeting;
        if (this.props.currentLocation!==undefined){
            if (this.props.currentLocation.pathname==='/login'){
                greeting = singinGreeting;            
            }else{
                greeting = null;
            }
        }


        return (
        <div className = {this.props.currentLocation !== undefined ? "session-form-container-plus" : "session-form-container" }>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
                {greeting}
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
