import React from "react"

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "O",
        }
    }

    render(){
        return  <button className="div-table-row"
                        onClick={() => this.setState({value:"X"})}>{this.state.value}</button>
    }
}

export default Cell