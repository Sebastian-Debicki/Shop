import React from 'react';
import ShoppingCartListItem from '../../../components/ShoppingCartListItem/ShoppingCartListItem';
import TotalPriceSummary from '../../../components/TotalPriceSummary/TotalPriceSummary';
import Backdrop from '../../../components/Backdrop/Backdrop';

const ShopingCart = ({ shoppingCartList, open, changeProductCount, deleteProductFromCartHandler, openSummaryModalHandler, toggleShoppingCartHandler }) => {

  let shoppingCartListDisplaying = (
    <li className="shoping-cart__empty-cart">Your shopping cart is empty</li>
  )
  if (shoppingCartList.length > 0) {
    shoppingCartListDisplaying = shoppingCartList.map(product =>
      <ShoppingCartListItem
        key={product.id}
        product={product}
        changeProductCount={changeProductCount}
        deleteProductFromCartHandler={deleteProductFromCartHandler}
      />);
  }

  return (
    <>
      {open && <Backdrop clicked={toggleShoppingCartHandler} className="backdrop backdrop__shoping-cart" />}
      <div className={open ? 'shoping-cart open' : 'shoping-cart'}>
        <h2 className="shoping-cart__heading">Shopping Cart</h2>
        <ul className="shoping-cart__list">
          {shoppingCartListDisplaying}
        </ul>
        {shoppingCartList.length > 0 && <TotalPriceSummary shoppingCartList={shoppingCartList} clicked={openSummaryModalHandler} />}
      </div>
    </>
  );
}

export default ShopingCart;