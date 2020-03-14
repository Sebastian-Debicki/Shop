import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Shop from '../containers/Shop/Shop';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('<App/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render Shop container', () => {
    expect(wrapper.find(Shop).length).toBe(1);
  })

})