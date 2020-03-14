import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../../components/Pagination/Pagination';

let wrapper, selectPageHandlerMock, changePageHandlerMock;
beforeEach(() => {
  selectPageHandlerMock = jest.fn()
  changePageHandlerMock = jest.fn()
  wrapper = shallow(<Pagination filteredShopList={200} postsPerPage={20} currentPage={3} selectPageHandler={selectPageHandlerMock} changePageHandler={changePageHandlerMock} />)
})

describe('<Pagination/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('back button is disabled when currentPage is 1', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(true);
  })

  it('next button is disabled when currentPage is last page', () => {
    wrapper.setProps({ currentPage: 10 });
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(true);
  })

  it('back button is not disabled when currentPage is 2', () => {
    wrapper.setProps({ currentPage: 2 });
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(false);
  })

  it('selectPageHandler Fn is called when select value was changed', () => {
    wrapper.find('select').simulate('change', { target: { value: 5 } });
  })

  it('select has a correct value number', () => {
    wrapper.setProps({ currentPage: 4 });
    expect(wrapper.find('select').prop('value')).toEqual(4);
  })

  it('changePageHandler is called when back button was clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(changePageHandlerMock).toHaveBeenCalled();
  })

  it('changePageHandler is called when next button was clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(changePageHandlerMock).toHaveBeenCalled();
  })

})