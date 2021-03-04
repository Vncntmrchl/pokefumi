import React, { Component } from 'react';
import {matches} from '../models/match'
import './style.css';

class CreateMatch extends Component {

    constructor() {
        super();
        this.createMatch = this.createMatch.bind(this)
        this.state = { id: 0, idPlayer1: 0, idPlayer2: 0, pokemonsPlayer1: '', pokemonsPlayer2: '', status: 'Pending', winner: '', Rounds:''} ;
        this.proposedId = React.createRef();
        this.proposedIdPlayer1 = React.createRef();
        this.proposedIdPlayer2 = React.createRef();
        this.proposedPP1 = React.createRef();
        this.proposedPP2 = React.createRef();
    }

    createMatch() {
        this.setState({id: this.proposedId.current.value,idPlayer1: this.proposedIdPlayer1.current.value,idPlayer2: this.proposedIdPlayer2.current.value,pokemonsPlayer1: this.proposedPP1.current.value,pokemonsPlayer2: this.proposedPP2.current.value});
        let match = this.state
        console.log("on ajoute" + match)
        matches.push(match)
        console.log(matches)
    }

    render() {
        return (
        <div className="login" >
            <h1>Create match</h1>
            <div >
                <input type="number" name="id" placeholder="idMatch" required="required" ref={this.proposedId} />
                <input type="number" name="idPlayer1" placeholder="idPlayer1" required="required"  ref={this.proposedIdPlayer1} />
                <input type="number" name="idPlayer2" placeholder="idPlayer2" required="required"  ref={this.proposedIdPlayer2} />
                <input type="text" name="pokemonsplayer1" placeholder="pokemonsplayer1" required="required" ref={ this.proposedPP1 } />
                <input type="text" name="pokemonsplayer2" placeholder="pokemonsplayer2" required="required" ref={ this.proposedPP2 } />
                <button className="btn btn-primary btn-block btn-large" onClick={ this.createMatch }>Create</button>
            </div>
        </div>
        );
    }
}

export default CreateMatch;
