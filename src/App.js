import React, { Component } from 'react';
import './styles/App.css';
import { getTickets } from './api/api'

import Header from './components/Header'
import TicketList from './components/TicketList'

class App extends Component {
  state = {
    tickets: null,
    error: null,
  }

  componentDidMount() {
    getTickets()
      .then(res => this.setState({ tickets: res}))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.error ? (
            <p className="error">
              Oops, there was an error: 
              <span className="error__message"> {this.state.error.message}</span>
            </p>
          ) : (
            <TicketList tickets={this.state.tickets} />
          )
        }
      </div>
    );
  }
}

export default App;
