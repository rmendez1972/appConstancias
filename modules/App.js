import React, { Component } from 'react'
import ReactDOM, {render} from 'react-dom';
import PropTypes from 'prop-types';
//import NavLink from './NavLink'
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem, Modal, Jumbotron,NavDropdown,MenuItem } from 'react-bootstrap'


import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
     <div className="App container">
        {/* navbar version react y ademas compatible con el router react-router-dom*/}
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/repos">
              Repos
            </NavItem>
            <NavItem eventKey={2} href="/cerrarsesion">
              Cerrar sesion
            </NavItem>
            <NavDropdown eventKey={3} title="Menu" id="">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        {/* area de renderizado */}
        <Routes />
      </div>
    );
  }
}

export default App;