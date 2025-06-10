import React, { Component } from 'react';
import {ImSearch} from 'react-icons/im'
import { toast } from 'react-toastify';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.pokemonName.trim() === ''){
        toast.error("Write name!");
        return;
    }
    this.props.onSub(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
        <ImSearch style={{marginRight: 8}}/>
        Find</button>
      </form>
    );
  }
}

export default PokemonForm;
