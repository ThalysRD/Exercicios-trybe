import React, { Component} from "react";

class Cargo extends Component {
    render() {
        return (
            <label>
                <textarea placeholder="Cargo" maxLength={40} required onMouseEnter={() => {
                    alert('Preencha com cuidado esta informação.')
                }}></textarea>
            </label>
        )
    }
}

export default Cargo;