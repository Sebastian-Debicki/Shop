import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../components/Modal/Modal';
import Backdrop from '../../../components/Backdrop/Backdrop';

let wrapper, closeModalHandlerMock;
beforeEach(() => {
  closeModalHandlerMock = jest.fn()
  wrapper = shallow(<Modal closeModalHandler={closeModalHandlerMock} />)
})

describe('<Modal/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render one Backdrop component', () => {
    expect(wrapper.find(Backdrop).length).toBe(1);
  })

  it('closeModalHandler Fn is called when button close was clicked', () => {
    wrapper.find('button').simulate('click');
    expect(closeModalHandlerMock).toHaveBeenCalled();
  })

})