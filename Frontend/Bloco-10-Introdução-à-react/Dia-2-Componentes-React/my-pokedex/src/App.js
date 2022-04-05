
import './App.css';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  
  return (
    <body>
      <Header/>
      <section className='PokeContainer'>{data.map((pokemon) => {return <Pokedex pokemon={pokemon} key={pokemon.id}/>})}</section>  
      </body> );
}

export default App;
