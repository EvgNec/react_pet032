import React, { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: 'idle',
  };
  // state: 'idle' - очикує (нічого не робе)
  //       'pending' - очикується виконання
  //       'resolved' - виконано
  //       'rejected' - відмова

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      this.setState({ status: 'pending'});

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
    const {  pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Input name</div>;
    }
    if (status === 'pending') {
      return <div>Loading</div>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other[`official-artwork`].front_default}
            alt={pokemon.name}
          />
        </div>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
  }
}

export default PokemonInfo;
