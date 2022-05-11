import React, { Component } from "react";

class Cidade extends Component {
    render() {
        return (
            <label>
                <input type="text" placeholder="Cidade" required maxLength={28}></input>
            </label>
        )
    }
}

export default Cidade;
