import React from 'react'

import { formatDate } from '../helpers/formatDate'

const TicketListItem = (props) => (
  <div className="ticket-list-item" onClick={() => props.onSelectTicket(props.ticket.id)}>
    <div className="ticket-list-item__header">
      <p>
        <span className="subject">{props.ticket.subject}</span> 
        <span className="right"> ID: {props.ticket.id}</span>
      </p> 
    </div>
    <div className="ticket-list-item__description" hidden={true}>
      <p>{props.ticket.description}</p>
    </div>
    <div className="ticket-list-item__header">
      <p>
        <span className="date">{formatDate(props.ticket.created_at)}</span> 
        <span className="right"> Status: {props.ticket.status}</span>
      </p>
  </div>
  </div>
)

export default TicketListItem