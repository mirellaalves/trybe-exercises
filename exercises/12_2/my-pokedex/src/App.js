import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {pokemons.map(pokemon => <Pokemon key={pokemons.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default App;
