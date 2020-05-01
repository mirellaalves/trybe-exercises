import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 class="title">Pokedex</h1>
        <div className="App">
          {pokemons.map(pokemon => <Pokemon key={pokemons.id} pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}

export default App;
