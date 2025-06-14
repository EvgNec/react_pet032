import React, { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;
    if (prevName !== nextName) {
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        // .then(res => res.json())
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`Not found pokemon with name ${nextName}`)
          );
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, pokemon, error } = this.state;
    const { name } = this.props;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Loading</div>}
        {!name && <div>Input name</div>}
        {pokemon && <div>{pokemon.name}</div>}
        {pokemon && (
          <img
            src={pokemon.sprites.other[`official-artwork`].front_default}
            alt={pokemon.name}
          />
        )}
      </div>
    );
  }
}

export default PokemonInfo;
