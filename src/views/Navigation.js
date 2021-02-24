import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a class="nav-item nav-link" href="#">Players</a>
                        <a class="nav-item nav-link" href="#">High Scores</a>
                        <a class="nav-item nav-link" href="#">Matches</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
