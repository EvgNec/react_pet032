import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName =>{
this.setState(({ pokemonName: pokemonName }))
  }
 
  render() {

    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
<PokemonForm onSub={this.handleFormSubmit}/>
<PokemonInfo name={this.state.pokemonName}/>
<ToastContainer autoClose={3000} /> 
      </div>
    );
  }
}

export default App;
