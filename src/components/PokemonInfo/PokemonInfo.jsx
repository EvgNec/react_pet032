import React, { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import { fetchPokemon } from '../../service/pokemonAPI.js';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: 'idle',
  };
  // state: 'idle' - очикує (запроса ще нема)
  //       'pending' - очикується виконання
  //       'resolved' - виконано
  //       'rejected' - відмова

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));

      // fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json();
      //     }
      //     return Promise.reject(
      //       new Error(`Not found pokemon with name ${nextName}`)
      //     );
      //   })
      //   .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
      //   .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { name } = this.props;

    if (status === 'idle') {
      return <div>Input name</div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView name={name} />;
    }
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;
