import React from 'react';
import { mount } from 'enzyme';

import Sort from './Sort'



it('renders without crashing', () => {
  const handleSortInnerFn = jest.fn()
  const expectedCallArgs = [['asc'], ['dsc']]
  const handleSort = jest.fn((args) => handleSortInnerFn);

  const wrapper = mount(<Sort handleSort={handleSort} />);

  expect(wrapper).toMatchSnapshot();
  expect(handleSort).toHaveBeenCalledTimes(expectedCallArgs.length);
  expect(handleSort.mock.calls).toMatchObject(expectedCallArgs);

  const buttons = wrapper.find('button');
  
  buttons.at(0).simulate('click');
  buttons.at(1).simulate('click');

  expect(handleSortInnerFn ).toHaveBeenCalledTimes(2);
});
