import React from 'react'
import { mount } from 'enzyme';

import GeneratedNumbersStats from './GeneratedNumbersStats'

it('renders without crashing', () => {
  const wrapper = mount(<GeneratedNumbersStats max={199046623} min={100494045} count={500}/>);

  expect(wrapper).toMatchSnapshot();
});