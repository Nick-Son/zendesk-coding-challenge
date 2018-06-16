import React from 'react'

import TicketListItem from './TicketListItem'
import PageSelector from './PageSelector'

const TicketList = (props) => (
  <div className="ticket-list">
    <h3>Viewing {props.ticketsPerPage} Tickets of {props.ticketCount}</h3>
    <PageSelector 
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
      pageNumbers={props.pageNumbers}
    />
    {props.tickets &&
        props.tickets.map(ticket => <TicketListItem key={ticket.id} ticket={ticket} onSelectTicket={props.onSelectTicket} />)
    }
    <PageSelector 
    currentPage={props.currentPage}
    onPageChange={props.onPageChange}
    pageNumbers={props.pageNumbers}
  />
  </div>
)

export default TicketList