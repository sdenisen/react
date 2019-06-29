import React from "react";
import Column from "../TableComponent/column";
import {Redirect} from "react-router-dom";


class Game extends React.Component{

    static gameField(){
        const field = [
            [0,0,0,0,2,1],
            [0,0,0,2,1,1],
            [0,0,1,2,2,2],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]];

        return (
            <div className="div-table">
                {field.map(el =>
                {
                    return <div className="div-table-row">
                        <Column values = {el} />
                    </div>
                })
                }
            </div>
        )
    }

    render(){
        const state = this.props.location.state;
        console.log(state);
        if (!state || !state.fromStartScreen){
            console.log("redirect to WelcomeScreen");
            return (<Redirect to="/welcome" />)
        }
        else{
            return (
                <div>
                    <span> Welcome, {state.player1} and {state.player2}.</span>
                    <span>Here is a game field!</span>
                    <div>{Game.gameField()}</div>
                </div>
            )
        }
    }
}

export default Game