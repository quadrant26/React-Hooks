import React, { Component } from 'react'
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount (){
        console.log( `ComponentDidMont => You clicked ${this.state.count} times` )
    }

    componentDidUpdate (){
        console.log( `componentDidUpdate => You clicked ${this.state.count} times` )
    }

    render() { 
        return (
            <div>
                <p>You click {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>click me</button>
            </div>
        );
    }

    addCount (){
        this.setState({
            count: this.state.count+1
        })
    }
}
 
export default Example;