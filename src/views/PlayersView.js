import React, { Component } from 'react';

class PlayersView extends Component {

    constructor() {
        super();
        this.playerslist = [];
    }

    render () {

        this.playerslist = [{id:1,name:"sacha de bourg palette"},{id:2,name:"team rocket"}]

        return (
            <div className="container p-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.playerslist.map(player => (
                            <tr>
                                <th scope="row">{player.id}</th>
                                <td> {player.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlayersView;