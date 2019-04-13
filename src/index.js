import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

// CSS
import style from './style.css';

// Component
import Comp from './component/Compteur';

class App extends Component {
    render() {
        return (
            <div>
                <Comp name={0}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

