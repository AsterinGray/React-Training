import React from "react";

const TransactionButton = ({ datas, grandTotal }) => {
  return (
    <div>
      Transaction Summary
      {datas.map((data, index) => (
        <div
          key={index}
        >{`${data.name} | ${data.qty} | Rp ${data.price} | Rp ${data.total}`}</div>
      ))}
      <p>Grand Total {`${grandTotal}`}</p>
    </div>
  );
};

export default TransactionButton;
