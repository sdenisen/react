import React from "react"

class Column extends React.Component{

    render(){
        return (
                this.props.values.map(cl => {
                    return <div>{cl}</div>
                })
        )
    }
}


export default Column