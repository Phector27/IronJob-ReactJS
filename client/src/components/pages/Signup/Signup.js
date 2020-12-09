import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import { Container, Button, Form, Col, Row } from 'react-bootstrap'


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
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1>Signup</h1>
                        <hr />
                        <Form style={{marginTop: '30px'}}onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control style={{ borderRadius: '20px' }} type="text" minlength="3" placeholder="Usuario" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control style={{ borderRadius: '20px' }} type="password" minlength="5" placeholder="Constraseña" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="name">
                                <Form.Label style={{marginTop: '15px'}}>Nombre / Razón social</Form.Label>
                                <Form.Control style={{ borderRadius: '20px' }} type="text" name="name" placeholder="Ejemplo, S.L." minlength="5" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <small style={{marginTop: '-15px', textAlign: 'center'}} className="form-text text-muted"><i> Si eres alumn@ indica nombre y apellidos.</i></small><br />
                            <Button style={{ borderRadius: '20px' }} variant="dark btn-block" type="submit">Signup</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup