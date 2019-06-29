import React from 'react'
import './App.css'
import './table.css'
import Welcome from "./StartScreen/welcome"
import Game from "./Game/game"
import GameOver from "./GameOver/gameOver"
import {HashRouter, Route} from "react-router-dom"

class App extends React.Component{
    render(){
      return (
          <HashRouter>
            <div>
                <Route path="/welcome" exact={true} component={Welcome} />
                <Route path="/game" component={Game} />
                <Route path="/gameover" component={GameOver} />
            </div>
          </HashRouter>
      )
    }
}

export default App
