import React, { Component } from 'react';

class BtnMore extends Component {
    render() {
        return (
            <div>
                <button 
                className="inc-btn" 
                onClick={() => this.props.increment()}
                >More</button>
            </div>
        );
    }
}

export default BtnMore;