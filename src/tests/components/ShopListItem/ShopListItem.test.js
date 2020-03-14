import React from 'react';
import { shallow } from 'enzyme';
import ShopListItem from '../../../components/ShopListItem/ShopListItem';
import { shoppingCartList } from '../../dummyData/shoppingCartList';

let wrapper, addToShopingCartHandlerMock;
beforeEach(() => {
  addToShopingCartHandlerMock = jest.fn();
  wrapper = shallow(<ShopListItem product={shoppingCartList[0]} addToShopingCartHandler={addToShopingCartHandlerMock} />)
})

describe('<ShopListItem/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('display correct product name', () => {
    expect(wrapper.find('.shop-list-item__name').text()).toEqual('Sprouts - Brussel');
  })

  it('display correct product price', () => {
    expect(wrapper.find('.shop-list-item__price').text()).toEqual('88.19$');
  })

  it('addToShopingCartHandler Fn is called when add to shopping cart button was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(addToShopingCartHandlerMock).toHaveBeenCalled();
  })

})