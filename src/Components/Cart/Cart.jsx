import React from "react";

const Cart = ({ datas }) => {
  return (
    <div>
      {datas.map((data, index) => (
        <div key={index}>{`${data.name} - ${data.total}`}</div>
      ))}
    </div>
  );
};

export default Cart;
