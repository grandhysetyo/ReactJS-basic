import React, { Component } from 'react'

export default class SubLifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
        console.log('SUB')
    }
    render() {
        return (
            <div>
                <h5>Sub Lifecycle</h5>
            </div>
        )
    }
}
