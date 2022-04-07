import React, {Component} from "react";

class Button extends Component {
    constructor(){
        super();
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
    }

    click1 (){
        console.log("1");
        console.log(this);
    }
    
     click2 (){
        console.log("2");
        console.log(this);
    }
    
    click3 () {
        console.log("3");
        console.log(this);}

    render() {
        return (<div><button onClick={this.click1}>1</button> <button onClick={this.click2}>2</button>  <button onClick={this.click3}>3</button> </div>)
    }
}

export default Button;
