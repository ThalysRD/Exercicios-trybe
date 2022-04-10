import React, { Component } from "react";

class Descricao extends Component {
    render(){
        return (<label>
            <textarea placeholder="Descrição do cargo" maxLength={500} required></textarea>
        </label>)
    }
}

export default Descricao