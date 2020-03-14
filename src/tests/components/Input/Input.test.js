import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/Input/Input';

let wrapper, changedMock;
beforeEach(() => {
  changedMock = jest.fn();
  wrapper = shallow(<Input type="text" name="some-name" value="some-value" changed={changedMock} />)
})

describe('<Input/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('has a correct props', () => {
    expect(wrapper.find('input').prop('type')).toEqual('text');
    expect(wrapper.find('input').prop('id')).toEqual('some-name');
    expect(wrapper.find('input').prop('value')).toEqual('some-value');
  })

  it('change Fn is called when input value was changed', () => {
    wrapper.find('input').simulate('change', { target: { value: 'some-value' } })
    expect(changedMock).toHaveBeenCalled();
  })

})