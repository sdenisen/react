import React from "react"
import Cell from "./cell"

class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "O",
        }
    }
    render(){
        return (
                this.props.values.map(cl => {
                    return <div className="div-table-col">
                        <Cell line={cl} />
                    </div>
                })
        )
    }
}
export default Column