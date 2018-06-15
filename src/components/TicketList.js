import React from 'react'

import TicketListItem from './TicketListItem'
import PageSelector from './PageSelector'

const TicketList = (props) => (
  <div className="ticket-list">
    <h3>Viewing {props.ticketsPerPage} Tickets of {props.ticketCount}</h3>
    <PageSelector 
      onChangePage={props.onChangePage}
      pageNumbers={props.pageNumbers}
    />
    {props.tickets &&
        props.tickets.map(ticket => <TicketListItem key={ticket.id} ticket={ticket} />)
    }
  </div>
)

export default TicketList