import React from 'react';
import ShopList from './ShopList/ShopList';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import ShoppingCartIcon from '../../components/ShoppingCartIcon/ShoppingCartIcon';
import Pagination from '../../components/Pagination/Pagination';
import { useShopState } from './useShopState';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const Shop = () => {

  const {
    shopList,
    searchValue,
    filterShopListHandler,
    toggleShoppingCartHandler,
    addToShoppingCartHandler,
    changeProductCount,
    deleteProductFromCartHandler,
    shoppingCartList,
    openShoppingCart,
    changePageHandler,
    selectPageHandler,
    currentPage,
    openSummaryModalHandler,
    closeSummaryModalHandler,
    openSummaryModal,
    finishOrderHandler,
    openSuccessModal,
    closeSuccessModalHandler,
    error } = useShopState();

  const filteredShopList = shopList.filter(product => product.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  const postsPerPage = 24;
  const indexOfLastShopItem = currentPage * postsPerPage;
  const indexOfFirstShopItem = indexOfLastShopItem - postsPerPage;
  const paginatedShopList = filteredShopList.slice(indexOfFirstShopItem, indexOfLastShopItem);

  return (
    <>
      <ShoppingCartIcon
        toggleShoppingCartHandler={toggleShoppingCartHandler}
        shoppingCartList={shoppingCartList}
      />
      <main className="shop">
        <ShopList
          shopList={paginatedShopList}
          filterShopListHandler={filterShopListHandler}
          searchValue={searchValue}
          addToShoppingCartHandler={addToShoppingCartHandler}
          foundedProductsNumber={filteredShopList.length}
        />
        <ShoppingCart
          shoppingCartList={shoppingCartList}
          open={openShoppingCart}
          changeProductCount={changeProductCount}
          deleteProductFromCartHandler={deleteProductFromCartHandler}
          openSummaryModalHandler={openSummaryModalHandler}
          toggleShoppingCartHandler={toggleShoppingCartHandler}
        />
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          filteredShopList={filteredShopList}
          changePageHandler={changePageHandler}
          selectPageHandler={selectPageHandler}
        />
        {openSummaryModal &&
          <Modal closeModalHandler={closeSummaryModalHandler}>
            <OrderSummary shoppingCartList={shoppingCartList} finishOrderHandler={finishOrderHandler} />
          </Modal>
        }
        {openSuccessModal &&
          <Modal closeModalHandler={closeSuccessModalHandler}>
            <p className="success"><span className="success__main">Success!</span> Thank you for choosing our store.</p>
          </Modal>
        }
        {error &&
          <Modal error={error} >
            <p className="error">{error}</p>
          </Modal>
        }
      </main>
    </>
  );
}

export default Shop;