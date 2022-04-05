import React, {Component} from "react";
import "./Pokedex.css";

class Pokedex extends Component {
    render() { const {pokemon} = this.props
        return <div className="poke"> 
                <img src={pokemon.image} alt={pokemon.name}/>
                <p>{pokemon.name}</p>
                <p>{pokemon.type}</p>
                <p>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
            </div>
    }
}

export default Pokedex;