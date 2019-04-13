import React, { Component } from 'react';

class BtnLess extends Component {
    render() {
        return (
            <div>
                <button 
                className="dec-btn" 
                onClick={() => this.props.decrement()}
                >Less</button>
            </div>
        );
    }
}

export default BtnLess;