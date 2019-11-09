import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/productos">React router</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
              exact
              className="nav-link"
              activeClassName="active"
              to="/productos">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact
                className="nav-link" 
                activeClassName="active"
                to="/productos/nuevo">Agregar Productos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;