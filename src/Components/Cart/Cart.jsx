import React from "react";

const Cart = ({ datas }) => {
  return (
    <div>
      {datas.map((data, index) => (
        // var grandTotal =
        <div
          key={index}
        >{`${data.name} | ${data.qty} | Rp ${data.price} | Rp ${data.total}`}</div>
      ))}
    </div>
  );
};

export default Cart;
