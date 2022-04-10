import React, { Component } from "react";

class CPF extends Component {
    render() {
        return(<label>
            <input type="text" placeholder="CPF" required maxLength={11} ></input>
        </label>)
    }
}

export default CPF;