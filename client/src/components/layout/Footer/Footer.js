import React, { Component } from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedUser: this.props.theUser
        }
    }
    render() {
        return (
            <Navbar style={{ paddingBottom: '50px', paddingTop: '50px', marginTop: '100px', borderTop: '.5px dashed lightgray' }} className="navFooter" variant="dark">
                <Container style={{ display: 'block', textAlign: 'center' }}>
                    <Row>
                        <Col sm={6} md={4} lg={2}>
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>IronJob</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><Nav.Link as="div" style={{ padding: '10px 0px' }}><Link to="/">Inicio</Link></Nav.Link></li>
                                <li><a href="#slider"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Volver arriba</Nav.Link></a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={4} lg={2}>
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>Nosotros</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><Link to="/somos"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Quiénes somos</Nav.Link></Link></li>
                                <li><a href="#ofrecemos"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Qué ofrecemos</Nav.Link></a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={4} lg={2}>
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>COMPARTE</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><a href="https://www.facebook.com/IronJob-104079551548311/" target="_blank" rel="noreferrer"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Habla de IronJob</Nav.Link></a></li>
                                <li><a href="https://www.ironhack.com/es/alumni" target="_blank" rel="noreferrer"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Disfruta la experiencia</Nav.Link></a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={4} lg={2}>
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>Blog</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><Link name="top" to="/blog"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Visita nuestro blog</Nav.Link></Link></li>
                                <li><Link to="/cookies"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Cookies and cream</Nav.Link></Link></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={4} lg={2} >
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>Contacto</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><a href="mailto: ironjobrc@gmail.com"><Nav.Link as="div" style={{ padding: '10px 0px' }}>email</Nav.Link></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=34640254348&text=%20Hola!" target="_blank" rel="noreferrer"><Nav.Link as="div" style={{ padding: '10px 0px' }}>WhatsApp</Nav.Link></a></li>
                            </ul>
                        </Col>
                        <Col sm={6} md={4} lg={2}>
                            <h6 style={{ fontSize: '.95em', textTransform: 'uppercase' }}>FAQs</h6>
                            <ul style={{ listStyle: 'none' }}>
                                <li><Link to="/faqs"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Preguntas frecuentes</Nav.Link></Link></li>
                                <li><Link to="/foro"><Nav.Link as="div" style={{ padding: '10px 0px' }}>Déjanos tu feedback</Nav.Link></Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}

export default Footer