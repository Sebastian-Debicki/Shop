import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCartIcon from '../../../components/ShoppingCartIcon/ShoppingCartIcon';
import { shoppingCartList } from '../../dummyData/shoppingCartList';

let wrapper, toggleShoppingCartHandlerMock;
beforeEach(() => {
  toggleShoppingCartHandlerMock = jest.fn()
  wrapper = shallow(<ShoppingCartIcon shoppingCartList={shoppingCartList} toggleShoppingCartHandler={toggleShoppingCartHandlerMock} />)
})

describe('<ShoppingCartIcon/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('display a correct number of added products', () => {
    expect(wrapper.find('.shoping-icon__counter__number').text()).toEqual('12')
  })

  it('toggleShoppingCartHandler is called when icon was clicked', () => {
    wrapper.find('.shoping-icon').simulate('click');
    expect(toggleShoppingCartHandlerMock).toHaveBeenCalled();
  })

})