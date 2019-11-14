import React from 'react';

const Header = props => (
  <nav className="navbar navbar-light bg-dark">
    <h1 className="header-title">{props.title}</h1>
  </nav>
);

export default Header;
