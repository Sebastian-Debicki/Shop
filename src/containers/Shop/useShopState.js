import React from 'react';
import axios from 'axios';

export const useShopState = () => {
  const [shopList, setShopList] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [shoppingCartList, setShoppingCartList] = React.useState([]);
  const [openShoppingCart, setOpenShoppingCart] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [openSummaryModal, setOpenSummaryModal] = React.useState(false);
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  const toggleShoppingCartHandler = () => setOpenShoppingCart(!openShoppingCart);
  const openSummaryModalHandler = () => { setOpenSummaryModal(true); setOpenShoppingCart(false); };
  const closeSummaryModalHandler = () => setOpenSummaryModal(false);
  const openSuccessModalHandler = () => setOpenSuccessModal(true);
  const closeSuccessModalHandler = () => setOpenSuccessModal(false);

  React.useEffect(() => {
    axios.get('/data.json')
      .then(res => res.data)
      .then(data => setShopList(data))
      .catch(err => setError("Sorry, something goes wrong. Please, try later."))
    const shoppingCartSaved = localStorage.getItem('shoppingCart')
    if (shoppingCartSaved) setShoppingCartList(JSON.parse(shoppingCartSaved))
  }, []);

  const saveShoppingCartToStorage = (shoppingCart) => localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

  const addToShoppingCartHandler = (product) => {
    const shoppingCartListUpdated = [...shoppingCartList];
    let productAlreadyInCart = false;
    shoppingCartListUpdated.forEach(item => {
      if (item.id === product.id) {
        productAlreadyInCart = true;
        item.count++;
      }
    })
    if (!productAlreadyInCart) {
      shoppingCartListUpdated.push({ ...product, count: 1 })
    }
    saveShoppingCartToStorage(shoppingCartListUpdated)
    setShoppingCartList(shoppingCartListUpdated)
  }

  const changeProductCount = (product, type) => {
    const shoppingCartListUpdated = [...shoppingCartList];
    if (type === 'ADD') {
      if (product.count + 1 <= 99) {
        product.count++;
      }
    };
    if (type === 'SUBTRACT') {
      if (product.count - 1 >= 1) {
        product.count--;
      }
    };
    saveShoppingCartToStorage(shoppingCartListUpdated)
    setShoppingCartList(shoppingCartListUpdated);
  }

  const deleteProductFromCartHandler = (product) => {
    const shoppingCartListUpdated = [...shoppingCartList];
    const prodIndex = shoppingCartListUpdated.findIndex(prod => prod.id === product.id)
    shoppingCartListUpdated.splice(prodIndex, 1);
    saveShoppingCartToStorage(shoppingCartListUpdated)
    setShoppingCartList(shoppingCartListUpdated)
  }

  const filterShopListHandler = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1)
  };

  const changePageHandler = (type) => {
    switch (type) {
      case 'next': setCurrentPage(currentPage + 1)
        break;
      case 'back': setCurrentPage(currentPage - 1)
        break;
      default: return
    }
  }

  const selectPageHandler = (e) => {
    setCurrentPage(parseInt(e.target.value))
  }

  const finishOrderHandler = () => {
    setShoppingCartList([]);
    closeSummaryModalHandler();
    openSuccessModalHandler();
    localStorage.removeItem('shoppingCart')
  }

  return {
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
    openSuccessModalHandler,
    error
  };
}
