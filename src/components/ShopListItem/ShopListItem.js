import React from 'react';

const ShopListItem = ({ product, addToShopingCartHandler }) => {
  return (
    <li className="shop-list-item">
      <span className="shop-list-item__name">{product.name}</span>
      <span className="shop-list-item__price">{product.price}$</span>
      <button className="btn shop-list-item__btn" onClick={() => addToShopingCartHandler(product)}>Add to cart</button>
    </li>
  );
}

export default ShopListItem; 