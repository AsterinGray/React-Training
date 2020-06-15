import React, { Component } from "react";

import Card from "../Components/Card/Card";
import productList from "../Data/ProductList";
import SearchBar from "../Components/Search/SearchBar";
import Cart from "../Components/Cart/Cart";
import Spinner from "../Components/Spinner/Spinner";
import TransactionSummary from "../Components/TransactionSummary/TransactionSummary";

class ProductPage extends Component {
  state = {
    products: [],
    cart: [],
    summary: [],
    grandTotal: 0,
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

  renderCards = () => {
    return this.state.products.map((product) => (
      <Card
        name={product.name}
        price={product.price}
        stock={product.stock}
        key={product.id}
        addToCart={this.addToCart}
        generateGrandTotal={this.generateGrandTotal}
      />
    ));
  };

  generateTransaction = () => {
    this.setState({ summary: [...this.state.cart] });
    this.setState({ cart: [] });
  };

  transactionSummaryBtn = () => {
    return (
      <div>
        <button onClick={() => this.generateTransaction()}>
          Generate Transaction
        </button>
        <TransactionSummary
          datas={this.state.summary}
          grandTotal={this.state.grandTotal}
        />
      </div>
    );
  };

  generateGrandTotal = (grandTotal) => {
    this.setState({ grandTotal: this.state.grandTotal + grandTotal.total });
  };

  render() {
    return (
      <div>
        <div className="card-container">
          <SearchBar searchProduct={this.searchProduct} />
          <Cart datas={this.state.cart} />
          {this.transactionSummaryBtn()}
          {this.state.products.length === 0 ? <Spinner /> : this.renderCards()}
        </div>
      </div>
    );
  }
}

export default ProductPage;
