import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            makanan : "Bakso"
        }
    }
    gantiMakanan(nama_makanan) {
        this.setState({
            makanan: nama_makanan
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.page}</h1>
                <h2>{this.state.makanan}</h2>
                <button onClick={()=> this.setState({makanan: "Soto"})}>Change</button>
                <button onClick={()=> this.gantiMakanan("Cilok")}>Change Using Method</button>
            </div>
        )
    }
}
