import React, { Component } from 'react'
//import NavLink from './NavLink'
import { Link } from "react-router-dom"
import { Nav,Navbar,NavItem,Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from "react-bootstrap"
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
              {/*<Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>*/}

              <LinkContainer to="/repos">
                <NavItem>Repos</NavItem>
              </LinkContainer>
              <LinkContainer to="/cerrarsesion">
                <NavItem>Cerrar Sesión</NavItem>
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