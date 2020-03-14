import React from 'react';

const TotalPriceSummary = ({ shoppingCartList, clicked }) => {

  let totalSum = 0;
  shoppingCartList.forEach(prod => {
    totalSum = (prod.price * prod.count) + totalSum;
  })

  return (
    <div className="total-price-summary">
      <h2 className="total-price-summary__heading">Total price: {totalSum.toFixed(2)}$</h2>
      <button className="btn total-price-summary__btn" onClick={clicked}>Order Now</button>
    </div>
  );
}

export default TotalPriceSummary;