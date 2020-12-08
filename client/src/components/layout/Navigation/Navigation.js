
import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from './images/LOGO-IRONJOB-1LINE.png'
import { Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'


class NavbarPage extends Component {

  constructor() {
    super()
    this.authService = new AuthService()
  }

  logOut = () => {
    this.authService
      .logout()
      .then(res => this.props.storeUser(undefined))
      .catch(err => console.log(err))
  }

  render() {

    return (
      <Navbar bg="transparent" expand="sm" fixed="top" className="menu">
        <Link to="/">
          <Navbar.Brand><img
            alt="Logotipo"
            src={logo}
            className="d-inline-block align-top"
          />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Company" id="basic-nav-dropdown">
              {
                this.props.loggedUser
                  ?
                  <>
                    <NavDropdown.Item><Link to="/company" className="link">Tus Ofertas</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/logout" className="link" onClick={this.logOut}>Cerrar sesión</Link></NavDropdown.Item>
                  </>
                  :
                  <>
                    <NavDropdown.Item><Link to="/login" className="link">Iniciar sesión</Link></NavDropdown.Item>
                  </>
              }
            </NavDropdown>
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/company" className="link">Tus Ofertas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">En construcción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">En construcción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">En construcción</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="School" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/company" className="link">Tus Ofertas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">En construcción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">En construcción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">En construcción</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default NavbarPage;