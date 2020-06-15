import React, { Component } from "react";

import Stock from "../Stock/Stock";
import Buyout from "../Buyout/Buyout";

class Card extends Component {
  state = {
    stock: 0
  };

  incrementStock = () => {
    this.state.stock < this.props.stock &&
      this.setState({ stock: this.state.stock + 1 });
  };

  decrementStock = () => {
    this.state.stock > 0 && this.setState({ stock: this.state.stock - 1 });
  };

  buyoutItems = () => {
    this.setState({ stock: this.props.stock });
  };

  submitProduct = () => {
    const data = {
      name: this.props.name,
      total: this.props.price * this.state.stock
    };
    this.props.addToCart(data);
  };

  render() {
    const { name, price } = this.props;
    return (
      <div className="card">
        <div className="card-title">{name}</div>
        <img
          className="card-image"
          src={"http://localhost:3000/Assets/Images/product.jpg"}
          alt="product"
        />
        <div className="card-price">{`Rp ${price}`}</div>
        <div className="card-button" onClick={() => this.submitProduct()}>
          Add To Cart
        </div>
        <Stock
          stock={this.state.stock}
          incrementStock={this.incrementStock}
          decrementStock={this.decrementStock}
        />
        <Buyout buyoutItems={this.buyoutItems} />
      </div>
    );
  }
}

export default Card;
