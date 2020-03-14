import React from 'react';

const ShopingCartIcon = ({ toggleShoppingCartHandler, shoppingCartList }) => {

  let shopingCountArr = [];
  shoppingCartList.forEach(product => {
    shopingCountArr.push(product.count)
  })
  const count = shopingCountArr.reduce((prevNum, number) => prevNum + number, 0)

  return (
    <div className="shoping-icon" onClick={toggleShoppingCartHandler}>
      <span className="fas fa-shopping-cart shoping-icon__icon"></span>
      <div className="shoping-icon__counter">
        <span className="shoping-icon__counter__number">{count}</span>
      </div>
    </div>
  );
}

export default ShopingCartIcon;