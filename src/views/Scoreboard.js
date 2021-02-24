import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Scoreboard extends Component {

    constructor(playersList) {
        super();
        this.playersList = playersList;
    }

    render() {

        let playersList = [{ name: 'Simon', id: 1, score: 0 }, { name: 'Théo', id: 2, score: 0 }];
        return (
            <div className="container p-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersList.map(player => (
                            <tr>
                                <th scope="row">{player.id}</th>
                                <td> {player.name}</td>
                                <td> {player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Scoreboard;
