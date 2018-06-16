import React from 'react'
import Modal from 'react-modal'

import { formatDate } from '../helpers/formatDate'

const TicketModal = (props) => (
  <Modal
    isOpen={!!props.selectedTicket}
    contentLabel="Ticket Details"
    onRequestClose={props.onClearSelectedTicket}
    // closeTimeoutMS={100}
    className="modal"
  >
  {props.selectedTicket && 
    <div>
      <h4>{props.selectedTicket[0].subject}</h4>
        <p>Requester: {props.selectedTicket[0].requester_id}</p>
        <p>{props.selectedTicket[0].description}</p> 
        <p>Status: {props.selectedTicket[0].status}</p>
        <p>Created: {formatDate(props.selectedTicket[0].created_at)}</p>
      </div>
    }
    <button className="button" onClick={props.onClearSelectedTicket}>close</button>
  </Modal>
)

export default TicketModal