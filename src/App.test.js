import React from 'react'
import { mount } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />)
  expect(wrapper).toMatchSnapshot();
  const numbers = [
    100494045,
    100547806,
    101628526,
    102369825,
    105988240
  ]
  wrapper.instance().handleGeneratedNumbers(numbers)
  const { numbers: actualNumbers, max, min, phoneNumbersGenerated }  = wrapper.state()
  expect(numbers).toMatchObject(actualNumbers)
  expect(max).toBe(Math.max(...numbers))
  expect(min).toBe(Math.min(...numbers))
  expect(phoneNumbersGenerated).toBe(true)

});

describe('handleSort()', () => {
  const numbers = [
    100547806,
    102369825,
    100494045,
    105988240,
    101628526,
  ];

  it('should sort numbers in ascending order', () => {
    const wrapper = mount(<App />)
    const expectedSortedNumbers = [...numbers].sort((a, b) => a - b);
  
    wrapper.setState({ numbers: [...numbers] });
    wrapper.instance().handleSort('asc')();
  
    const { numbers: actualSortedNumbers }  = wrapper.state();
    expect(actualSortedNumbers).toMatchObject(expectedSortedNumbers);
  });

  it('should sort numbers in descending order', () => {
    const wrapper = mount(<App />)
    const expectedSortedNumbers = [...numbers].sort((a, b) => b - a);
  
    wrapper.setState({ numbers: [...numbers] });
    wrapper.instance().handleSort('dsc')();
  
    const { numbers: actualSortedNumbers }  = wrapper.state();
    expect(actualSortedNumbers).toMatchObject(expectedSortedNumbers);
  });
})

