import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import playerslist from './PlayersView';

class LoginView extends Component {

    constructor() {
        super();
        this.state = { username: '' };
        this.proposedName = React.createRef();
    }

    logUsername() {
/*         Creates an error if clicked when field is empty
        if (this.proposedName.current.value) {
            let currentName = this.proposedName.current.value;
            this.setState({username: currentName});
            playerslist.add(currentName);
            return <Redirect to='/players'/>
        } */
    }

    render() {
        return (
        <div className="login" >
            <h1>Login</h1>
            <form>
                <input type="text" name="u" placeholder="Username" required="required" ref={ this.proposedName } />
                <button className="btn btn-primary btn-block btn-large" onClick={ this.logUsername }>Start</button>
            </form>
        </div>
        );
    }
}

export default LoginView;
