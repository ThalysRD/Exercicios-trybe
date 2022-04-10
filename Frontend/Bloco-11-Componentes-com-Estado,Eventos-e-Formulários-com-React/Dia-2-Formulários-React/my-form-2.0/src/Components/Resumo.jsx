import React, { Component } from "react";

class Resumo extends Component {
    render() {
        return (
            <label>
                <textarea placeholder="Resumo do currículo" maxLength={1000} required></textarea>
            </label>
        )
    }
}

export default Resumo