import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import TicketList from '../../components/TicketList';
import tickets from '../fixtures/tickets'

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render TicketList correctly with props', () => {
  const wrapper = shallow(<TicketList tickets={tickets} ticketCount={tickets.length} ticketsPerPage={tickets.length} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render TicketList title correctly', () => {
  const wrapper = shallow(<TicketList />)
  expect(wrapper.find('h3').length).toBe(1)
})

test('Should render TicketList logo correctly', () => {
  const wrapper = shallow(<TicketList />)
  expect(wrapper.find('PageSelector').length).toBe(2)
})
