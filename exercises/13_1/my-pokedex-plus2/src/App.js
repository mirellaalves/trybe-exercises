import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import FireButton from './FireButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemonType: '',
    }
    this.setNextPokemon = this.setNextPokemon.bind(this);
    this.setNextTypePokemon = this.setNextPokemon.bind(this);
  }

  setNextPokemon() {
    if (this.state.pokemonIndex === pokemons.length -1) {
      return (this.setState({ pokemonIndex: 0 }));
    } (this.setState({ pokemonIndex: (this.state.pokemonIndex + 1),}));
  }

  setNextTypePokemon() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => pokemon.type === filteredType)
  }

  render () {
    const pokemon2 = pokemons[this.state.pokemonIndex];
    const type = pokemons.map(pokemon => pokemon.type === 'fire')

    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <div className="App">
          <Pokemon pokemon={pokemon2} />
        </div>
        <div className='type-ctn'>
          <FireButton handleClick={() => this.setNextTypePokemon(this.props.pokemon)} />
        </div>
        <div className='next-ctn'>
          <NextButton handleClick={this.setNextPokemon} />
        </div>
      </div>
    )
  }
}

export default App;
