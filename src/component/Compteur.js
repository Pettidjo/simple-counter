import React,{ Component } from 'react';

//Component
import AffComp from './AfficheComp';
import BtnMore from './Btn';
import BtnLess from './Btn2';
 
class Comp extends Component {

    state = {
        nb: this.props.name
    }
    
    increment = () => {
        this.setState({
           nb: this.state.nb + 1
        })        
    }

    decrement = () => {
        this.setState({
           nb: this.state.nb - 1
        })        
    }

    componentWillMount() {
        const test_json = localStorage.getItem('compteur');
        const test = JSON.parse(test_json);

        if (test) {
            this.setState({
                nb: test
            })

        } else {
            this.setState({
                nb: 0
            })
        }
    }
    
    componentWillUpdate(nextProps, nextState) {
        const compteur = JSON.stringify(nextState.nb)

        localStorage.setItem('compteur', compteur);
    }
    
    render(){
        return(
            <div>
                <AffComp name={this.state.nb}/>
                <div className="btn">
                    <BtnLess decrement={this.decrement}/>
                    <BtnMore increment={this.increment}/>
                </div>
            </div>
        )
    }
}

export default Comp;