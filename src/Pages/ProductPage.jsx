import React, { Component } from "react";

import Card from "../Components/Card/Card";
import productList from "../Datas/ProductList";
import SearchBar from "../Components/Search/SearchBar";
import Cart from "../Components/Cart/Cart";

class ProductPage extends Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    this.setState({ products: productList });
  }

  searchProduct = (value) => {
    const filteredProducts = productList.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ products: filteredProducts });
  };

  addToCart = (data) => {
    this.setState({ cart: [...this.state.cart, data] });
  };

  render() {
    return (
      <div>
        <div className="card-container">
          <SearchBar searchProduct={this.searchProduct} />
          <Cart datas={this.state.cart} />
          {this.state.products.map((product) => (
            <Card
              name={product.name}
              price={product.price}
              stock={product.stock}
              key={product.name}
              addToCart={this.addToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;
