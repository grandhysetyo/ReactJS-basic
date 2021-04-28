import React, { Component } from 'react'
import SubLifecycle from '../component/SubLifecycle.js'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan: "Bakso",
             data: {},
             tampilhalamanSub: false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) =>{
            // console.log(json)
            this.setState({ 
                data: json,
            })
        })
    }
    ubahMakanan(value){
        this.setState = ({
            makanan: value
        })
    }    
    render() {
        console.log(this.state.data)
        return (
            <div>
                <h3>Lifecycle React JS</h3>
                <p>Example props: {this.props.page}</p>
                <p>Example state: {this.state.makanan}</p>
                <p>Example state: {this.state.data.title}</p>
                {this.state.tampilhalamanSub && <SubLifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

                <button onClick={() => this.setState({tampilhalamanSub: !this.state.tampilhalamanSub})}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}
