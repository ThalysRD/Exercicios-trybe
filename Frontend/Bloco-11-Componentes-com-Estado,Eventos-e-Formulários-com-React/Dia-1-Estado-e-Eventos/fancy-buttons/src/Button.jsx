import React, {Component} from "react";
import './Button.css';

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
        this.green = this.green.bind(this);
    }

    click1 (){
        this.setState((estadoAnterior, _props ) => ({
            button1: estadoAnterior.button1 + 1
        }))
        console.log(`Botão 1 ${this.green(this.state.button1+1)}`);
    }
    
     click2 (){
        this.setState((estadoAnterior, _props ) => ({
            button2: estadoAnterior.button2 + 1
        }))
        console.log(`Botão 2 ${this.green(this.state.button2+1)}`)
    }
    
    click3 () {
        this.setState((estadoAnterior, _props ) => ({
            button3: estadoAnterior.button3 + 1
        }))
        console.log(`Botão 3 ${this.green(this.state.button3+1)}`)
    }
    
    green (num){
        return num % 2 === 0 ? 'green' : 'white';
     }
     
    
    

    render() {
        return (<div><button onClick={this.click1} style={{ backgroundColor: this.green(this.state.button1) }} >{this.state.button1}</button> <button onClick={this.click2} style={{ backgroundColor: this.green(this.state.button2) }}>{this.state.button2}</button>  <button onClick={this.click3} style={{ backgroundColor: this.green(this.state.button3) }} >{this.state.button3}</button> </div>)   
    }
}

export default Button;
