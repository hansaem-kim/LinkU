import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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

        const singupGreeting = (<div className='greeting'>
                                    <h1>Join Us</h1>
                                    <p>Make the most of your professional life</p>
                                </div>
        )

        let greeting;
        if (this.props.currentLocation!==undefined){
            if (this.props.currentLocation.pathname==='/signup'){
                greeting = singupGreeting;            
            }else{
                greeting = null;
            }
        }

        return (
        <div className = {this.props.currentLocation !== undefined ? "session-form-container-plus" : "session-form-container" }>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <div className="signup-form">
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
                <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="login-input"
                    placeholder="First Name"
                />
                <input type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    className="login-input"
                    placeholder="Last Name"
                />
                <input className="session-submit-btn" type="submit" value={this.props.formType} />
            </div>
            </form>
        </div>
        );
    }
}

export default SignupForm;
