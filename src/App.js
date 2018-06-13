import React, { Component } from 'react';
import logo from './assets/zendesk-medium-algae.svg';
import './styles/App.css';
import { getTickets } from './api/api'

class App extends Component {
  onGetTickets = () => {
    getTickets()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Zendesk Ticket Viewer</h3>
        </header>
        <p className="App-intro">
          Display TicketList component
        </p>
        <button onClick={this.onGetTickets}>get tickets</button>
      </div>
    );
  }
}

export default App;
