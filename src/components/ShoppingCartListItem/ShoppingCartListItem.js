import React from 'react';

const ShopingCartListItem = ({ product, changeProductCount, deleteProductFromCartHandler }) => {

  const productTotalPrice = product.price * product.count;

  return (
    <li className="shoping-cart-list-item">
      <button onClick={() => deleteProductFromCartHandler(product)} className="btn shoping-cart-list-item__btn-delete"><i className="fas fa-times-circle"></i></button>
      <span className="shoping-cart-list-item__name">{product.name}</span>
      <div className="counter">
        <button onClick={() => changeProductCount(product, 'SUBTRACT')} className="btn counter__btn">-</button>
        <span className="counter__number">{product.count}</span>
        <button onClick={() => changeProductCount(product, 'ADD')} className="btn counter__btn">+</button>
      </div>
      <span className="shoping-cart-list-item__price">{productTotalPrice.toFixed(2)}$</span>
    </li>
  );
}

export default ShopingCartListItem;