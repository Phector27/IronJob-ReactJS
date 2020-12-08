import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import { Container, Button, Form } from 'react-bootstrap'


class Signup extends Component {

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
            .signup(this.state.username, this.state.password, this.state.name)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/') // Propiedad recogida en react router dom, pasadas a las props de singup en App.js
                // Si estuviesemos en un componente funcional y no de clase haríamos props.history.push
            })
            .catch(err => console.log(err))
    }
    

    render() {
        return (

            <Container className="form">
                        <h1>Signup</h1>
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
                            
                            <Form.Group controlId="name">
                                <Form.Label>Nombre / Razón social</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <small className="form-text text-muted"><i>En caso de alumnos indicar nombre completo y apellidos.</i></small><hr />
                            <Button variant="dark btn-block" type="submit">Signup</Button>
                        </Form>
            </Container>
        )
    }
}

export default Signup