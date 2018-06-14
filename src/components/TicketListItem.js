import React from 'react'

const TicketListItem = (props) => (
  <div className="ticket-list-item">
    <div className="ticket-list-item__header">
      <p>{props.ticket.subject} - {props.ticket.id}</p>
    </div>
    <div>
      <p>{props.ticket.created_at} - {props.ticket.status}</p>
    </div>
  </div>
)

export default TicketListItem