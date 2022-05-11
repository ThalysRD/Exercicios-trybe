import React, { Component } from "react";

class Email extends Component {
    render () {
        return (
            <label>
                <input type="email" placeholder="Email" required maxLength={50}></input>
            </label>
        )
    }
}

export default Email