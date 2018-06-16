import React from 'react'

import { formatDate } from '../helpers/formatDate'

const TicketListItem = (props) => (
  <div className="ticket-list-item">
    <div className="ticket-list-item__header">
      <p>{props.ticket.subject} - ID: {props.ticket.id}</p> 
    </div>
    <p>
      <span className="date">{formatDate(props.ticket.created_at)}</span> 
      <span className="status"> Status: {props.ticket.status}</span>
    </p>
    <div>
    </div>
  </div>
)

export default TicketListItem