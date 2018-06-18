import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json'
import TicketModal from '../../components/TicketModal';
import ticketData from '../fixtures/ticketData'

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render TicketModal correctly with props', () => {
  const wrapper = shallow(<TicketModal selectedTicket={[ticketData]} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
