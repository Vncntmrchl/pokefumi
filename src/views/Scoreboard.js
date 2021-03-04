import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Scoreboard extends Component {

    constructor() {
        super();
        this.state = { playersList: [{ name: 'Simon', id: 1, score: 0 }, { name: 'Théo', id: 2, score: 2 },{ name: 'Samir', id: 3, score: 1 }]};
        // this.setState( () => ({playersList : [{ name: 'Simon', id: 1, score: 0 }, { name: 'Théo', id: 2, score: 2 }]})) 

    }

    componentDidMount(){
        let playersList = this.state.playersList
        playersList.sort((a,b) => b.score - a.score)
        this.setState({playersList})
    }

    render() {


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
                        {this.state.playersList.map((player,index) => index<10 && (
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
