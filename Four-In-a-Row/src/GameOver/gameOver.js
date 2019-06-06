import React from "react"
import {Redirect} from "react-router-dom"

class GameOver extends React.Component{
    constructor(){
        super()

    }

    render(){
        const state = this.props.location.state;
        if (!state || !state.fromStartScreen){
            console.log("redirect to WelcomeScreen")
            return (<Redirect to="/" />)
        }else{
            return (
                <div>
                    <h2>Game Over!</h2>
                </div>
            )
        }
    }
}

export default GameOver