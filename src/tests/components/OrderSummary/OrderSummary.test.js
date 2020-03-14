import React from 'react';
import { mount } from 'enzyme';
import OrderSummary from '../../../components/OrderSummary/OrderSummary';
import { shoppingCartList } from '../../dummyData/shoppingCartList';
import TotalPriceSummary from '../../../components/TotalPriceSummary/TotalPriceSummary';

let wrapper, finishOrderHandlerMock;
beforeEach(() => {
  finishOrderHandlerMock = jest.fn();
  wrapper = mount(<OrderSummary shoppingCartList={shoppingCartList} finishOrderHandler={finishOrderHandlerMock} />);
})

describe('<OrderSummary/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render TotalPriceSummary component', () => {
    expect(wrapper.find(TotalPriceSummary).length).toBe(1);
  })

  it('render correct number of ordered products', () => {
    expect(wrapper.find('.order-summary__product').length).toBe(shoppingCartList.length);
  })

  it('has a correct product name of first ordered product', () => {
    expect(wrapper.find('.order-summary__product__name').at(0).text()).toEqual("Sprouts - Brussel");
  })

  it('has a correct product count of first ordered product', () => {
    expect(wrapper.find('.order-summary__product__count').at(0).text()).toEqual('3');
  })

  it('has a correct product price of first ordered product', () => {
    expect(wrapper.find('.order-summary__product__price').at(0).text()).toEqual('264.57$');
  })

  it('finishOrderHandler Fn is called when button from TotalPriceSummary component was clicked', () => {
    const button = wrapper.find(TotalPriceSummary).find('button');
    button.simulate('click');
    expect(finishOrderHandlerMock).toHaveBeenCalled();
  })

})