import React, {Component} from "react";


function click1 (){
    console.log("1");
}

function click2 (){
    console.log("2");
}

function click3 () {
    console.log("3");
}

class Button extends Component {
    render() {
        return (<div><button onClick={click1}>1</button> <button onClick={click2}>2</button>  <button onClick={click3}>3</button> </div>)
    }
}

export default Button;
