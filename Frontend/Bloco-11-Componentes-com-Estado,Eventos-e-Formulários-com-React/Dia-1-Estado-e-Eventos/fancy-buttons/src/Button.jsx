import React, {Component} from "react";

class Button extends Component {
    constructor(){
        super();
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.state = {
            button1: 0,
            button2: 0,
            button3:0
        }
    }

    click1 (){
        this.setState((estadoAnterior, _props ) => ({
            button1: estadoAnterior.button1 + 1
        }))
    }
    
     click2 (){
        this.setState((estadoAnterior, _props ) => ({
            button2: estadoAnterior.button2 + 1
        }))
    }
    
    click3 () {
        this.setState((estadoAnterior, _props ) => ({
            button3: estadoAnterior.button3 + 1
        }))
    }
        

    render() {
        return (<div><button onClick={this.click1}>{this.state.button1}</button> <button onClick={this.click2}>{this.state.button2}</button>  <button onClick={this.click3}>{this.state.button3}</button> </div>)   
    }
}

export default Button;
