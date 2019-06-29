import React, { Component } from "react";
import "./PokeSearch.css";
import PokeCard from "./PokeCard";
import axios from "axios";

class PokeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      pokemon: "",
      err: "",
      baseExp: "",
      type: "",
      weight: ""
    };

    this.getData = this.getData.bind(this);
  }

  async getData() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${this.state.name}`;
      let response = await axios.get(url);
      let data = response.data;
      this.setState({ 
        pokemon: data.name,
        img: data.sprites.front_default, 
        err: "",
        baseExp: data.base_experience,
        type: data.types[0].type.name,
        weight: data.weight
       
      });

    } catch (err) {
      this.setState({ err: "No pokemon found", pokemon: "",img: "" })
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  render() {
    return (
      <div>
        <div className="search">
          <form onSubmit={this.onSubmit}>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <button className="btn btn-info">Search</button>
          </form>
        </div>
        <PokeCard 
          name={this.state.pokemon} 
          img={this.state.img} 
          err={this.state.err}
          baseExp={this.state.baseExp}
          type={this.state.type}
          weight={this.state.weight}
        />
      </div>
    );
  }
}

export default PokeSearch;
