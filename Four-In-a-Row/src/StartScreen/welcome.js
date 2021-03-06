import React from "react";
import {Link} from "react-router-dom"


class Welcome extends React.Component{

    constructor(props){
        super(props);

        this.user_name = "Sergey";
        this.state = {
            player1: "Max",
            player2: "Alex"
        };

        this.setPlayerName = this.setPlayerName.bind(this);
    }

    setPlayerName(event){
        console.log(event.target.id);
        if (event.target.id === "player_id1"){
            this.setState( {player1: event.target.value} )
        }
        if (event.target.id === "player_id2"){
            this.setState( {player2: event.target.value} )
        }
    }

    render(){
        return (
            <div>
                <span> Welcome, {this.user_name} </span>
                <p><input id="player_id1" type="text" value={this.state.player1} onChange={this.setPlayerName}/></p>
                <p><input id="player_id2" type="text" value={this.state.player2} onChange={this.setPlayerName}/></p>
                <Link type="button"
                      to={{
                          pathname: "/game",
                          state: {
                              fromStartScreen: true,
                              player1: this.state.player1,
                              player2: this.state.player2
                          }
                      }}>Start Game</Link>
            </div>
        )
    }
}

export default Welcome