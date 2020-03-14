import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from '../../../components/Backdrop/Backdrop';

let wrapper, clickedMock;
beforeEach(() => {
  clickedMock = jest.fn()
  wrapper = shallow(<Backdrop clicked={clickedMock} className="backdrop" />)
})

describe('<Backdrop/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('has a correct className prop', () => {
    expect(wrapper.find('div').prop('className')).toEqual('backdrop')
  })

  it('clicked Fn is called when backrop was clicked', () => {
    wrapper.find('div').simulate('click');
    expect(clickedMock).toHaveBeenCalled();
  })
})