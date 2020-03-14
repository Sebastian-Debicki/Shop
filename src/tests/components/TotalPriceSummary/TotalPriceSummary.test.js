import React from 'react';
import { shallow } from 'enzyme';
import TotalPriceSummary from '../../../components/TotalPriceSummary/TotalPriceSummary';
import { shoppingCartList } from '../../dummyData/shoppingCartList';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn();
  wrapper = shallow(<TotalPriceSummary shoppingCartList={shoppingCartList} clicked={clickedMock} />);
})

describe('<TotalPriceSummary/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('display a correct total price number', () => {
    expect(wrapper.find('.total-price-summary__heading').text()).toEqual('Total price: 723.99$')
  })

  it('clicked Fn was called when button was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(clickedMock).toHaveBeenCalled();
  })

})