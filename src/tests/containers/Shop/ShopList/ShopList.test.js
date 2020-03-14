import React from 'react';
import { mount } from 'enzyme';
import ShopList from '../../../../containers/Shop/ShopList/ShopList';
import { shoppingCartList } from '../../../dummyData/shoppingCartList';
import ShopListItem from '../../../../components/ShopListItem/ShopListItem';
import Input from '../../../../components/Input/Input';

let wrapper, filterShopListHandlerMock, addToShoppingCartHandlerMock;
beforeEach(() => {
  filterShopListHandlerMock = jest.fn();
  addToShoppingCartHandlerMock = jest.fn();
  wrapper = mount(<ShopList shopList={shoppingCartList} filterShopListHandler={filterShopListHandlerMock} searchValue="" addToShoppingCartHandler={addToShoppingCartHandlerMock} foundedProductsNumber={10} />)
})

describe('<ShopList/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('display correct number of products', () => {
    expect(wrapper.find(ShopListItem).length).toBe(shoppingCartList.length);
  })

  it('filterShopListHandler Fn is called when input value was changed', () => {
    wrapper.find(Input).find('input').simulate('change', { target: { value: 'some-value' } });
    expect(filterShopListHandlerMock).toHaveBeenCalled();
  })

  it('not render founded products paragraph when searchValue is empty', () => {
    expect(wrapper.find('.shop-list__founded-products').length).toBe(0);
  })

  it('render founded products paragraph when searchValue is not empty', () => {
    wrapper.setProps({ searchValue: 'aa' })
    expect(wrapper.find('.shop-list__founded-products').length).toBe(1);
  })

  it('has a correct foundedProductsNumber props', () => {
    wrapper.setProps({ searchValue: 'aa' })
    expect(wrapper.find('.shop-list__founded-products').text()).toEqual('You found 10 products')
  })
})