import React from 'react'
import Modal from 'react-modal'

import { formatDate } from '../helpers/helpers'

const TicketModal = (props) => (
  <Modal
    isOpen={!!props.selectedTicket}
    contentLabel="Ticket Details"
    onRequestClose={props.onClearSelectedTicket}
    closeTimeoutMS={200}
    className="modal"
  >
    {props.selectedTicket && 
      <div>
      <p className="text-left dotted-line">Requester: {props.selectedTicket[0].requester_id}</p>
        <h4>{props.selectedTicket[0].subject}</h4>
        <p className="ticket-modal__description">{props.selectedTicket[0].description}</p> 
        <div className="ticket-list-item__header">
          <p>
            <span className="date">{formatDate(props.selectedTicket[0].created_at)}</span> 
            <span className="right"> Status: {props.selectedTicket[0].status}</span>
          </p>
        </div>
      </div>
    }
    <button className="button" onClick={props.onClearSelectedTicket}>close</button>
  </Modal>
)

export default TicketModal