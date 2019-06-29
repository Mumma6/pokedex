import React, { Component } from "react";
import "./PokeCard.css";

class PokeCard extends Component {
  render() {
    if (this.props.err) {
      return <h2>{this.props.err}</h2>;
    } else {
      return (
        <div className="row">
          <div className="col">
            <h2 className="pokemon">{this.props.name}</h2>
            <ul className="pokemon-info">
              <li>Experience: {this.props.baseExp}</li>
              <li>Type: {this.props.type}</li>
              <li>Weight: {this.props.weight}</li>
            </ul>
          </div>

          <div className="col img">
            <img className="img" src={this.props.img} alt={this.props.name} />
          </div>
        </div>
      );
    }
  }
}

export default PokeCard;
