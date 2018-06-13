import React from 'react'

const TicketList = (props) => (
  <div className="ticket-list">
    <h3>Tickets</h3>
    {console.log('props', props.tickets)}
    { !!props.tickets ?
      (
        props.tickets.map(ticket => <p key={ticket.id}>Ticket {ticket.id}</p>)
      ) : (
        <p>loading</p>
      )
    }
  </div>
)

export default TicketList