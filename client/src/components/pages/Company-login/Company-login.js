import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Container, Button, Form } from 'react-bootstrap'

class CompanyLogin extends Component {

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
                this.props.history.push('/company') // Propiedad recogida en react router dom, pasadas a las props de singup en App.js
                // Si estuviesemos en un componente funcional y no de clase haríamos props.history.push
            })
            .catch(err => console.log(err))
    }
    

    render() {
        return (

            <Container className="form">
                        <h1>Login</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="dark btn-block" type="submit">Login</Button>
                        </Form>
            </Container>
        )
    }
}

export default CompanyLogin