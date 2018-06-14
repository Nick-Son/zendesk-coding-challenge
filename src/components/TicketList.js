import React from 'react'

import TicketListItem from './TicketListItem'

const TicketList = (props) => (
  <div className="ticket-list">
    <h3>Tickets</h3>
    {console.log('props', props.tickets)}
    { !!props.tickets ?
      (
        props.tickets.map(ticket => (
          <TicketListItem key={ticket.id} ticket={ticket} />
        ))
      ) : (
        <p>loading</p>
      )
    }
  </div>
)

export default TicketList