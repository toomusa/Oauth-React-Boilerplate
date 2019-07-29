import React, { Component } from "react";
import { connect } from "react-redux";

class Stuff extends Component {
    render() {
        return (
            <div>
                <h1>myFaveNumber: {this.props.whatever}</h1>
            </div>
        )
    }
}

function mapStateToProps({counter}) {
    return {whatever: counter.counter}
}

export default connect(mapStateToProps, null)(Stuff);