import React, { Component } from "react";
import brazilStates from "../data";

class Estado extends Component {
    render() {
        return (
            <label> 
                <select name="estado" id="estado" required> 
                 {brazilStates.map(estado => <option value={estado}>{estado}</option>)}
                </select>
            </label>
        )
    }
}

export default Estado;