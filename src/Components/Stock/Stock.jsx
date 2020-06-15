import React from "react";

const Stock = ({ stock, incrementStock, decrementStock }) => {
  return (
    <div className="stock-container">
      <div className="stock-action" onClick={decrementStock}>-</div>
      {stock}
      <div className="stock-action" onClick={incrementStock}>+</div>
    </div>
  );
};

export default Stock;
