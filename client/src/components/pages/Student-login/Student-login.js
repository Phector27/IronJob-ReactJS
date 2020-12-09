import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'

class StudentLogin extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            name: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/student/profile') // Propiedad recogida en react router dom, pasadas a las props de singup en App.js
                // Si estuviesemos en un componente funcional y no de clase haríamos props.history.push
            })
            .catch(err => console.log(err))
    }
    

    render() {
        return (
            <Container className="form">
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        <h1>Student-Login</h1>
                        <hr />
                        <Form style={{marginTop: '30px'}}onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control style={{borderRadius: '20px'}} type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control style={{borderRadius: '20px'}} type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button style={{borderRadius: '20px'}} variant="dark btn-block" type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default StudentLogin