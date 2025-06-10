import React, { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, pokemon } = this.state;
    const { name } = this.props;
    return (
      <div>
        {loading && <div>Loading</div>}
        {!name && <div>Input name</div>}
        {pokemon && <div>{pokemon.name}</div>}
      </div>
    );
  }
}

export default PokemonInfo;
