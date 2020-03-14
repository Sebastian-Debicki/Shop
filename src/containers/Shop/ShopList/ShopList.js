import React from 'react';
import ShopListItem from '../../../components/ShopListItem/ShopListItem';
import Input from '../../../components/Input/Input';

const ShopList = ({ shopList, filterShopListHandler, searchValue, addToShoppingCartHandler, foundedProductsNumber }) => {

  let shopListDisplaying = shopList.map(product =>
    <ShopListItem
      key={product.id}
      product={product}
      addToShopingCartHandler={addToShoppingCartHandler}
    />)

  return (
    <section className="shop-list">
      <Input type="text" name="Find product" changed={filterShopListHandler} value={searchValue} />
      {searchValue && <span className="shop-list__founded-products">You found {foundedProductsNumber} products</span>}
      <ul className="shop-list__list">
        {shopListDisplaying}
      </ul>
    </section>
  );
}

export default ShopList;