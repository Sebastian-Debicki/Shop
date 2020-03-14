import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartListItem from '../../../components/ShoppingCartListItem/ShoppingCartListItem';
import { shoppingCartList } from '../../dummyData/shoppingCartList';

let wrapper, changeProductCountMock, deleteProductFromCartHandlerMock;
beforeEach(() => {
  changeProductCountMock = jest.fn();
  deleteProductFromCartHandlerMock = jest.fn();
  wrapper = shallow(<ShoppingCartListItem product={shoppingCartList[0]} changeProductCount={changeProductCountMock} deleteProductFromCartHandler={deleteProductFromCartHandlerMock} />)
})

describe('<ShopingCartListItem/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('deleteProductFromCartHandler is called when removing button was clicked', () => {
    wrapper.find('.shoping-cart-list-item__btn-delete').simulate('click');
    expect(deleteProductFromCartHandlerMock).toHaveBeenCalled();
  })

  it('display a correct pdoduct name', () => {
    expect(wrapper.find('.shoping-cart-list-item__name').text()).toEqual('Sprouts - Brussel');
  })

  it('changeProductCount is called when SUBTRACT button was clicked', () => {
    wrapper.find('.counter__btn').at(0).simulate('click');
    expect(changeProductCountMock).toHaveBeenCalled();
  })

  it('changeProductCount is called when ADD button was clicked', () => {
    wrapper.find('.counter__btn').at(1).simulate('click');
    expect(changeProductCountMock).toHaveBeenCalled();
  })

  it('display correct number of ordered products', () => {
    expect(wrapper.find('.counter__number').text()).toEqual('3');
  })

  it('display correct sum of ordered products price', () => {
    expect(wrapper.find('.shoping-cart-list-item__price').text()).toEqual('264.57$');
  })

})