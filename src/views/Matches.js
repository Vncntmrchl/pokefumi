import React, { Component } from 'react';

class Matches extends Component {

    constructor() {
        super();
        this.matcheslist = [];
    }

    render() {

        this.matcheslist = [{ id: 1, idPlayer1: 1, idPlayer2: 2, pokemonsPlayer1: 'Bleu | Gris | Vert', pokemonsPlayer2: 'Rouge | Jaune | Violet', status: 'Over', winner: 'Player 1'}];

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
                        {this.matcheslist.map(match => (
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
  