import React, { Component } from "react";

class Nome extends Component {
    render() {
        return (
            <label>
                <input type="text" maxLength={40} placeholder="Nome Completo" required></input>
            </label>
        )
    }
}

export default Nome;
