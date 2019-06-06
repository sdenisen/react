import React from 'react'
import './App.css'
import Welcome from "./StartScreen/welcome"
import {HashRouter, Route} from "react-router-dom"
import GameOver from "./GameOver/gameOver"
import Column from "./TableComponent/column"

class App extends React.Component{

    constructor(props){
      super();
    }

    render(){
      return (
          <HashRouter>
            <div>
                <Route path="/" exact={true} component={Welcome}></Route>
                <Route path="/gameover" component={GameOver}></Route>
            </div>
          </HashRouter>

      )
    }
}

function testfield(){
    const field = [
        [0,0,0,0,2,1],
        [0,0,0,2,1,1],
        [0,0,1,2,2,2],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ]

    return (
        <div>
            {field.map(el => {
                return <Column values = {el} />
            } )}
        </div>
    )
}
export default testfield
//export default App;
