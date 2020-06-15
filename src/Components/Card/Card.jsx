import React, { Component } from "react";

import Stock from "../Stock/Stock";
import Buyout from "../Buyout/Buyout";

class Card extends Component {
  state = {
    stock: 0,
  };

  incrementStock = () => {
    const { state, props } = this;
    state.stock < props.stock && this.setState({ stock: this.state.stock + 1 });
  };

  decrementStock = () => {
    this.state.stock > 0 && this.setState({ stock: this.state.stock - 1 });
  };

  renderBuyoutItems = () => {
    this.setState({ stock: this.props.stock });
  };

  submitProduct = () => {
    const data = {
      name: this.props.name,
      total: this.props.price * this.state.stock,
    };
    this.props.addToCart(data);
  };

  renderStockQty = () => {
    return (
      <Stock
        stock={this.state.stock}
        incrementStock={this.incrementStock}
        decrementStock={this.decrementStock}
      />
    );
  };

  renderImage = () => {
    return (
      <img
        className="card-image"
        src={"http://localhost:3000/Assets/Images/product.jpg"}
        alt="product"
      />
    );
  };

  renderAddtoCart = () => {
    return (
      <div className="card-button" onClick={() => this.submitProduct()}>
        Add To Cart
      </div>
    );
  };

  render() {
    const { name, price } = this.props;
    return (
      <div className="card">
        <div className="card-title">{name}</div>
        {this.renderImage}
        <div className="card-price">{`Rp ${price}`}</div>
        {this.renderImage()}
        {this.renderAddtoCart()}
        {this.renderStockQty()}
        <Buyout buyoutItems={this.renderBuyoutItems} />
      </div>
    );
  }
}

export default Card;
