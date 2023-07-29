import React , { Component } from 'react'

class MainTable extends Component {

    constructor(){
        super()
        this.state = {
            tablenum: 7
        }
    }

    changeTable(num){
        this.setState({
            table: num
        })
    }

    render(){
        return (
            <div>
                <h1 style={{ fontSize:30 }}>Table: {this.state.tablenum}</h1>
            </div>
        )
    }
}

export default MainTable