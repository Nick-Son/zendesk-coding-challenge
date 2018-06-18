import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../components/Header';

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render Header title correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h3').length).toBe(1)
})

test('Should render Header logo correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('img').length).toBe(1)
})
