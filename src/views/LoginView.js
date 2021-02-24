import React, { Component } from 'react';
import './style.css';

class LoginView extends Component {

    render() {
        return (
        <div class="login" >
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large" >Start</button>
            </form>
        </div>
        );
    }
}

export default LoginView;
