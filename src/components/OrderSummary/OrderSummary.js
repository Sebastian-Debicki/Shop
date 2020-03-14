import React from 'react';
import TotalPriceSummary from '../TotalPriceSummary/TotalPriceSummary';

const OrderSummary = ({ shoppingCartList, finishOrderHandler }) => {

  const summaryOrderDisplaying = shoppingCartList.map(product =>
    <li key={product.id} className="order-summary__product">
      <p className="order-summary__product__name">{product.name}</p>
      <p className="order-summary__product__count">{product.count}</p>
      <p className="order-summary__product__price">{(product.price * product.count).toFixed(2)}$</p>
    </li>
  )

  return (
    <div className="oder-summary">
      <h2 className="order-summary__heading">Order Summary</h2>
      <ul className="order-summary__list">
        {summaryOrderDisplaying}
      </ul>
      <TotalPriceSummary shoppingCartList={shoppingCartList} clicked={finishOrderHandler} />
    </div>
  );
}

export default OrderSummary;