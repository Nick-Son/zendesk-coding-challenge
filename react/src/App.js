import React, { Component } from 'react';
import { getTickets } from './api/api'
import { groupTickets } from './helpers/helpers'
import './styles/App.css';

import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import TicketList from './components/TicketList'
import TicketModal from './components/TicketModal'
import loader from './assets/loader.svg'

class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 10,
    selectedTicket: undefined
  }

  onPageChange = (number) => {
    this.setState({ currentPage: number})
  }

  onSelectTicket = (id) => {
    const selectedTicket = this.state.tickets.filter(ticket => ticket.id === id)
    this.setState({ selectedTicket: selectedTicket})
  }

  onClearSelectedTicket = () => {
    this.setState({ selectedTicket: undefined})
  }

  componentDidMount() {
    getTickets()
      .then(res => {
        if(res === 401) {
          this.setState({error: {message: "Couldn't Authenticate You"}})
        } else if (res === 404) {
          this.setState({error: {message: "API endpoint not found"}})
        } else if (res === 'Network Error') {
          this.setState({error: {message: "Network Error, check that the server is running and refresh the page"}})
        } else {
          this.setState({ tickets: res})
        }
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage, selectedTicket } = this.state
    const groupedTickets = tickets && groupTickets(tickets, ticketsPerPage)
    const pageNumbers = groupedTickets && groupedTickets.map((group, index) => index)

    return (
      <div className="App">
        <Header />
        {
          error ? (
            <ErrorMessage error={error} />
          ) : (
            <div>
              {
                tickets ? (
                  <TicketList 
                    tickets={groupedTickets ? groupedTickets[currentPage] : null} 
                    ticketCount={tickets && tickets.length}
                    ticketsPerPage={groupedTickets ? groupedTickets[currentPage].length : null}
                    currentPage={currentPage}
                    onPageChange={this.onPageChange}  
                    pageNumbers={pageNumbers}
                    onSelectTicket={this.onSelectTicket}
                  />
                ) : (
                  <img className="loader" src={loader} alt="loading"/>
                )
              }
              <TicketModal 
                selectedTicket={selectedTicket}
                onClearSelectedTicket={this.onClearSelectedTicket}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
