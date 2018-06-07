import React, { Component } from 'react';
import logo from './assets/zendesk-medium-white.svg';
import './styles/App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
