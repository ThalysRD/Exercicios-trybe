import React, { Component } from "react";

class Moradia extends Component {
    render() {
        return (
            <div>
              <button type="radio">
                   <label> Casa</label>
                </button>
                <button type="radio">
                    <label> Apartamento</label>
                </button>
                </div>
        )
    }
}

export default Moradia;