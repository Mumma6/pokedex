import React, { Component } from 'react'
import PokeSearch from './PokeSearch';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h1>POKEDEX</h1>
        <h4>Search for a pokemon...</h4>
        <PokeSearch />
      </div>
    )
  }
}

export default Pokedex
