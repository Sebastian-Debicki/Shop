import React from 'react';
import { mount } from 'enzyme';
import ShoppingCart from '../../../../containers/Shop/ShoppingCart/ShoppingCart';
import ShoppingCartListItem from '../../../../components/ShoppingCartListItem/ShoppingCartListItem';
import { shoppingCartList } from '../../../dummyData/shoppingCartList';
import Backdrop from '../../../../components/Backdrop/Backdrop';
import TotalPriceSummary from '../../../../components/TotalPriceSummary/TotalPriceSummary';

let wrapper, changeProductCountMock, deleteProductFromCartHandlerMock, openSummaryModalHandlerMock, toggleShoppingCartHandlerMock;
beforeEach(() => {
  changeProductCountMock = jest.fn();
  deleteProductFromCartHandlerMock = jest.fn();
  openSummaryModalHandlerMock = jest.fn();
  toggleShoppingCartHandlerMock = jest.fn();
  wrapper = mount(<ShoppingCart shoppingCartList={shoppingCartList} open={false} changeProductCount={changeProductCountMock} deleteProductFromCartHandler={deleteProductFromCartHandlerMock} openSummaryModalHandler={openSummaryModalHandlerMock} toggleShoppingCartHandler={toggleShoppingCartHandlerMock} />)
})

describe('<ShoppingCart/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render correct number of added to shopping cart products', () => {
    expect(wrapper.find(ShoppingCartListItem).length).toBe(shoppingCartList.length);
  })

  it('not render products when shoppingCart is empty', () => {
    wrapper.setProps({ shoppingCartList: [] })
    expect(wrapper.find(ShoppingCartListItem).length).toBe(0);
  })

  it('has correct class name by default', () => {
    expect(wrapper.find('.shoping-cart').prop('className')).toEqual('shoping-cart');
  })

  it('has correct class name when open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find('.shoping-cart').prop('className')).toEqual('shoping-cart open');
  })

  it('not render Backdrop component by default', () => {
    expect(wrapper.find(Backdrop).length).toBe(0);
  })

  it('render Backdrop component when open = true', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.find(Backdrop).length).toBe(1);
  })

  it('render TotalPriceSummary component', () => {
    expect(wrapper.find(TotalPriceSummary).length).toBe(1);
  })

  it('not render TotalPriceSummary component when shoppingCart is empty', () => {
    wrapper.setProps({ shoppingCartList: [] })
    expect(wrapper.find(TotalPriceSummary).length).toBe(0);
  })

  it('render paragraph about empty shopping cart when shopping cart is empty', () => {
    wrapper.setProps({ shoppingCartList: [] })
    expect(wrapper.find('.shoping-cart__empty-cart').length).toBe(1);
  })

  it('not render paragraph about empty shopping cart when shopping cart is not empty', () => {
    expect(wrapper.find('.shoping-cart__empty-cart').length).toBe(0);
  })

})