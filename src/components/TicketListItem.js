import React from 'react'

import { formatDate } from '../helpers/formatDate'

const TicketListItem = (props) => (
  <div className="ticket-list-item">
    <div className="ticket-list-item__header">
      <p>{props.ticket.subject} - ID: {props.ticket.id}</p>
    </div>
    <div>
      <p>{formatDate(props.ticket.created_at)} - Status: {props.ticket.status}</p>
    </div>
  </div>
)

export default TicketListItem