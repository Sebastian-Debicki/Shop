import React from 'react';
import { shallow } from 'enzyme';
import Shop from '../../../containers/Shop/Shop';
import ShoppingCartIcon from '../../../components/ShoppingCartIcon/ShoppingCartIcon';
import ShoppingCart from '../../../containers/Shop/ShoppingCart/ShoppingCart';
import ShopList from '../../../containers/Shop/ShopList/ShopList';
import Pagination from '../../../components/Pagination/Pagination';
import Modal from '../../../components/Modal/Modal';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Shop />)
})

describe('<Shop/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render ShoppingCartIcon component', () => {
    expect(wrapper.find(ShoppingCartIcon).length).toBe(1)
  })

  it('render ShopList component', () => {
    expect(wrapper.find(ShopList).length).toBe(1)
  })

  it('render ShoppingCart component', () => {
    expect(wrapper.find(ShoppingCart).length).toBe(1)
  })

  it('render Pagination component', () => {
    expect(wrapper.find(Pagination).length).toBe(1)
  })

  it('not render any Modal component by default', () => {
    expect(wrapper.find(Modal).length).toBe(0)
  })

})