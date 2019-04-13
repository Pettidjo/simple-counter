import React, { Component } from 'react';

class AffComp extends Component {
    render() {
        return <p className="comp">{this.props.name}</p>
    }
}

export default AffComp;