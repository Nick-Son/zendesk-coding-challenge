import React from 'react'
import logo from '../assets/zendesk-medium-algae.svg';

const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <h3 className="header__title">Zendesk Ticket Viewer</h3>
  </header>
)

export default Header