import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from './images/LOGO-IRONJOB-1LINE.png'
import { Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'

class NavbarPage extends Component {

  constructor() {
    super()
    this.state = {
      color: 'transparent'
    }
    this.authService = new AuthService()
  }

  logOut = () => {
    this.authService
      .logout()
      .then(res => this.props.storeUser(undefined))
      .catch(err => alert('No se ha podido cerrar sesión correctamente. Inténtalo de nuevo por favor.'))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY < 100) {
      this.setState({ color: 'transparent' })
    } else if (window.scrollY > 100) {
      this.setState({ color: 'white' })
    }
  }

  render() {
    return (
      <Navbar bg={this.state.color} expand="sm" fixed="top" className="menu">
        <Link to="/">
          <Navbar.Brand>
            <img
            alt="Logotipo"
            src={logo}
            className="d-inline-block align-top"
          />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {
          this.props.loggedUser
            ?
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" style={{ marginRight: '30px' }}>
                <NavDropdown style={{ fontWeight: '600' }} title="Company" id="basic-nav-dropdown">
                  {
                    this.props.loggedUser.role === 'BUSINESS-RECRUITER'
                      ?
                      <>
                        <NavDropdown.Item><Link to="/company/offers" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Tus Ofertas</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/logout" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} onClick={this.logOut}>Cerrar sesión</Link></NavDropdown.Item>
                      </>
                      :
                      <>
                        <NavDropdown.Item><Link to="/company/login" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Acceder</Link></NavDropdown.Item>
                      </>
                  }
                </NavDropdown>
                <NavDropdown title="Student" id="basic-nav-dropdown" style={{ marginLeft: '20px', fontWeight: '600' }}>
                  {
                    this.props.loggedUser.role === 'Student'
                      ?
                      <>
                        <NavDropdown.Item><Link to="/student/profile" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Perfil</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/student/all-offers" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Ver ofertas</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/logout" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} onClick={this.logOut}>Cerrar sesión</Link></NavDropdown.Item>
                      </>
                      :
                      <>
                        <NavDropdown.Item><Link to="/student/login" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Acceder</Link></NavDropdown.Item>
                      </>
                  }
                </NavDropdown>
                <NavDropdown title="School" id="basic-nav-dropdown" style={{ marginLeft: '20px', fontWeight: '600' }}>
                  {
                    this.props.loggedUser.role === 'IRONHACK-RECRUITER'
                      ?
                      <>
                        <NavDropdown.Item><Link to="/academy/offers" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Ofertas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/academy/control" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Panel de control</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/logout" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} onClick={this.logOut}>Cerrar sesión</Link></NavDropdown.Item>
                      </>
                      :
                      <>
                        <NavDropdown.Item><Link to="/academy/login" style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }}>Acceder</Link></NavDropdown.Item>
                      </>
                  }
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            :
            <>
              <Nav className="ml-auto" style={{ marginRight: '30px' }}>
                <NavDropdown style={{ textDecoration: 'none', color: 'black', textTransform: 'none', fontWeight: 'bold', marginRight: '50px', fontSize: '1.2em' }} title="Acceder" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} to="/company/login">Company</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} to="/student/login">Student</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link style={{ textDecoration: 'none', color: 'black', textTransform: 'none' }} to="/academy/login">Academy</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link className="ml-auto" style={{ fontWeight: '300', textDecoration: 'none', color: 'black', textTransform: 'none' }} to="/signup">Regístrate</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
        }
      </Navbar>
    )
  }
}

export default NavbarPage;