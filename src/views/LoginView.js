import React, { Component } from 'react';
import './style.css';

class LoginView extends Component {

    constructor() {
        super();
        this.state = { username: '' };
        this.proposedName = React.createRef();
    }

    logUsername() {
        let currentName = this.proposedName.current.value;
        this.setState({username: currentName});
    }

    render() {
        return (
        <div className="login" >
            <h1>Login</h1>
            <form method="POST">
                <input type="text" name="u" placeholder="Username" required="required" ref={ this.proposedName } />
                <button className="btn btn-primary btn-block btn-large" onSubmit={ this.logUsername }>Start</button>
            </form>
        </div>
        );
    }
}

export default LoginView;
