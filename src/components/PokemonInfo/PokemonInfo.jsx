import React, { Component } from 'react'

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: true
    }

    componentDidUpdate(prevProps, prevState){
      if(prevProps.prevProps.name !== this.props.name)  {
        fetch(`https://pokeapi.co/api/v2/pokemon${this.props.name}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon}))
        .finally(()=> this.setState({loading: false}));
      }
    }


  render() {
    return (
      <div>
        Pokk{this.props.name}
      </div>
    )
  }
}

export default PokemonInfo
