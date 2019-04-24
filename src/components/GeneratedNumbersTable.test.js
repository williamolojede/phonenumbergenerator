import React from 'react'
import { mount } from 'enzyme';

import GeneratedNumbersTable from './GeneratedNumbersTable'

it('renders without crashing', () => {
  const numbers = [
    100494045,
    100547806,
    101628526,
    102369825,
    105988240
  ];
  const wrapper = mount(<GeneratedNumbersTable numbers={numbers}/>);

  expect(wrapper).toMatchSnapshot();
});