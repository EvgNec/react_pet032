import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    pokemon: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({loading: true});
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon}))
      .finally(()=> this.setState({loading: false}));
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {this.state.pokemon && <div>{pokemon.name}</div>}

        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}

export default App;
