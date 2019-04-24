import React from 'react'
import { mount } from 'enzyme';

import NumbersGeneratorForm from './NumbersGeneratorForm'

const setup = () => {
  const props = {
    handleGeneratedNumbers:  jest.fn(),
  }
  const wrapper = mount(<NumbersGeneratorForm {...props}/>);

  return {
    props,
    wrapper
  }
}

it('renders without crashing', () => {
  const { wrapper } = setup();

  expect(wrapper).toMatchSnapshot();
});

it('generates a 9 digits random number', () => {
  const { wrapper } = setup();
  const number =wrapper.instance().generateRandomNumber();
  expect(String(number).length).toBe(9);
})

it('generates a four 9 digits random number', () => {
  const { wrapper } = setup();
  const numbers = wrapper.instance().generateRandomNumbers(4);
  expect(numbers.length).toBe(4);
  numbers.forEach(num => expect(String(num).length).toBe(9))
});

it('generates random numbers when form is submitted', () => {
  const { wrapper, props } = setup();
  const Form = wrapper.find('form');
  const preventDefault = jest.fn()

  Form.simulate('submit', {
    preventDefault
  })
  expect(preventDefault).toHaveBeenCalled();
  expect(props.handleGeneratedNumbers).toHaveBeenCalled();
})