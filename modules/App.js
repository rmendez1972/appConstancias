import React, { Component } from 'react'
//import NavLink from './NavLink'
import { Link } from "react-router-dom"
import { Nav,Navbar,NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
     <div className="App container">
        {/* navbar version react y ademas compatible con el router react-router-dom*/}
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/repos">
                <NavItem>Repos</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* area de renderizado */}
        <Routes />
      </div>
    );
  }
}

export default App;