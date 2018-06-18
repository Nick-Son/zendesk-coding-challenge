import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import TicketListItem from '../../components/TicketListItem';
import ticketData from '../fixtures/ticketData'

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render TicketListItem correctly with props', () => {
  const wrapper = shallow(<TicketListItem key={ticketData.id} ticket={ticketData} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
