import React, { Component } from "react";

class Hello extends Component {
    render() {
        var color = {'color': 'red'}
        console.log(color);
        return (
            <>
                <h1 style={{'color': 'red'}}>Hello {this.props.name} {this.props.sname}</h1>
            </>
        )
    }
}
export default Hello