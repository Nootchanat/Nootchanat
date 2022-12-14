import React,{ Component } from 'react';

export default class StateInClass extends Component{
    constructor (props){
        super(props);
        this.state = {
            id:props.myId,
            name:props.name,
            counter: 0,
        };
    }

    userClickPlus = () => {
        this.setState(
            {
                counter:this.state.counter + 1,
            }
        );
    };

    userClickMinus = () => {
        this.setState(
            {
            counter: this.state.counter - 1,
        }
        );
    };

    render() {
        return(
        <div>
           
       
             <p>
                 <strong>Name:</strong>{this.state.Name}
             </p>
              <p>
                  <strong>Counter:</strong>{this.state.counter}
                  </p>
                  <button onClick={this.ClickPlus}>+</button>
                  <button onClick={this.ClickMinus}>-</button>
        </div>
        );
    }
}
