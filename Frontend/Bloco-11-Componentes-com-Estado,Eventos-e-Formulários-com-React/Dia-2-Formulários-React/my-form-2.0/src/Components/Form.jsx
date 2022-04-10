import React, { Component } from "react";
import Nome from "./Nome";
import Email from "./Email";
import CPF from "./CPF";
import Cidade from "./Cidade";
import Estado from "./Estado";
import Moradia from "./Moradia";
import Resumo from "./Resumo";
import Cargo from "./Cargo";
import Descricao from "./Descricao";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }


    render() {
        return (
           <div>
                <fieldset>
                <h1>Preencha o formulário</h1>
                <Nome />
                <Email />
                <CPF />
                <Cidade />
                <Estado />
                <Moradia />
            </fieldset>
            <fieldset>
            <Resumo />
            <Cargo  />
            <Descricao />
            </fieldset>
            <button>Enviar</button>
            </div>
        )
    }
}

export default Form;