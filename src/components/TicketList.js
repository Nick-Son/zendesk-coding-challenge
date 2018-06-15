import React from 'react'

import TicketListItem from './TicketListItem'
import PageSelector from './PageSelector'

const TicketList = (props) => (
  <div className="ticket-list">
    <h3>Tickets</h3>
    <PageSelector />
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