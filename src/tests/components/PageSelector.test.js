import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import PageSelector from '../../components/PageSelector';

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render PageSelector correctly with props', () => {
  const pageNumbers = [0, 1, 2, 3, 4]
  const wrapper = shallow(<PageSelector currentPage={0} pageNumbers={pageNumbers} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should change current page on click', () => {
  const pageNumbers = [0, 1, 2, 3, 4]
  const onPageChangeSpy = jest.fn()
  const wrapper = shallow(<PageSelector currentPage={0} pageNumbers={pageNumbers} onPageChange={onPageChangeSpy} />)
  wrapper.find('li').at(1).simulate('click')
  expect(onPageChangeSpy).toHaveBeenCalledWith(1)
})
