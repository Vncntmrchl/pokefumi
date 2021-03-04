import React, { Component } from 'react';
import {matches} from '../models/match'

class Matches extends Component {

    constructor() {
        super();
        this.state = {}
        this.state.matches = matches
        this.matcheslist = matches;
    }

    componentDidMount(){
        console.log(matches)
    }

    render() {
        return (
            <div className="container p-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Player 1</th>
                            <th scope="col">Player 2</th>
                            <th scope="col">Player 1's Pokemons</th>
                            <th scope="col">Player 2's Pokemons</th>
                            <th scope="col">Status</th>
                            <th scope="col">Winner</th>
                            <th scope="col">Rounds</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map(match => (
                            <tr>
                                <th scope="row">{match.id}</th>
                                <td> {match.idPlayer1}</td>
                                <td> {match.idPlayer2}</td>
                                <td> {match.pokemonsPlayer1}</td>
                                <td> {match.pokemonsPlayer2}</td>
                                <td> {match.status}</td>
                                <td> {match.winner}</td>
                                <td> N/A </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Matches;
  