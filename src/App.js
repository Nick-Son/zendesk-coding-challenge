import React, { Component } from 'react';
import { getTickets } from './api/api'
import './styles/App.css';

import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import TicketList from './components/TicketList'

import { groupTickets } from './helpers/groupTickets'

class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 20
  }

  onChangePage = (number) => {
    this.setState({ currentPage: number})
  }

  componentDidMount() {
    getTickets()
      .then(res => this.setState({ tickets: res}))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage } = this.state
    const groupedTickets = tickets && groupTickets(tickets, ticketsPerPage)
    const pageNumbers = groupedTickets && groupedTickets.map((group, index) => index )

    return (
      <div className="App">
        <Header />
        {
          error ? (
            <ErrorMessage error={error} />
          ) : (
            <TicketList 
              tickets={groupedTickets ? groupedTickets[currentPage] : null} 
              ticketCount={tickets && tickets.length}
              ticketsPerPage={groupedTickets ? groupedTickets[currentPage].length : null}
              onChangePage={this.onChangePage}  
              pageNumbers={pageNumbers}
            />
          )
        }
      </div>
    );
  }
}

export default App;
