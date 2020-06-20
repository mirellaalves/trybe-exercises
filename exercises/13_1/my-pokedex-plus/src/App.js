import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemonIndex: 0,}
    this.setNextPokemon = this.setNextPokemon.bind(this);
  }

  setNextPokemon() {
    if (this.state.pokemonIndex == pokemons.length -1) {
      return (this.setState({ pokemonIndex: 0 }));
    } (this.setState({ pokemonIndex: (this.state.pokemonIndex + 1),}));
  }

  render () {
    const pokemon2 = pokemons[this.state.pokemonIndex];

    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <div className="App">
          <Pokemon pokemon={pokemon2} />
        </div>
        <Button handleClick={this.setNextPokemon} />
      </div>
    )
  }
}

export default App;
