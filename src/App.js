import React, { Component } from 'react';
import logo from './assets/zendesk-medium-algae.svg';
import './styles/App.css';
import { getTickets } from './api/api'

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Zendesk Ticket Viewer</h3>
        </header>
          <TicketList tickets={this.state.tickets} />
      </div>
    );
  }
}

export default App;
