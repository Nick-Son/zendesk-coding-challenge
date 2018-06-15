import React, { Component } from 'react';
import { getTickets } from './api/api'
import './styles/App.css';

import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import TicketList from './components/TicketList'

import { ticketGrouper } from './helpers/ticketGrouper'

class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 1,
    ticketsPerPage: 20
  }

  componentDidMount() {
    getTickets()
      .then(res => this.setState({ tickets: res}))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage } = this.state
    let groupedTickets = tickets ? ticketGrouper(tickets, ticketsPerPage) : null
    console.log('grouped tickets: ', groupedTickets)

    return (
      <div className="App">
        <Header />
        {
          error ? (
            <ErrorMessage error={error} />
          ) : (
            <TicketList tickets={groupedTickets ? groupedTickets[currentPage] : null} />
          )
        }
      </div>
    );
  }
}

export default App;
