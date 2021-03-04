import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a href="/" className="nav-item nav-link active"> Home </a>
                            <a href="/players" className="nav-item nav-link"> Players </a>
                            <a href="/matches" className="nav-item nav-link"> Matches </a>
                            <a href="/scores" className="nav-item nav-link"> Scores </a>
                            <a href="/creatematch" className="nav-item nav-link"> Create Match </a>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;
