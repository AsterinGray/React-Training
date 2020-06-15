import React from "react";

const Buyout = ({ buyoutItems }) => {
  return (
    <div className="stock-buyout" onClick={buyoutItems}>
      Buyout
    </div>
  );
};

export default Buyout;
