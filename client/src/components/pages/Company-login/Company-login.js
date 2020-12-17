import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'

class CompanyLogin extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            name: '',
            error: ''
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
                this.props.history.push('/company/offers') 
            })
            .catch(err=> this.setState({error: 'Error al iniciar sesión. Revisa tu usuario y contraseña.' }))
    }

    render() {
        return (
            <Container className="form">
                <Row>
                    <Col md={{span: 4, offset: 4}}>
                        <h1>Company-Login</h1>
                        <hr />
                        <Form style={{marginTop: '30px'}}onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label style={{marginLeft: '15px'}}>Usuario</Form.Label>
                                <Form.Control style={{borderRadius: '20px'}} type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label style={{marginLeft: '15px'}}>Contraseña</Form.Label>
                                <Form.Control style={{borderRadius: '20px'}} type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button style={{ borderRadius: '20px' }} variant="dark btn-block" type="submit">Login</Button>
                            <h5 style={{color: 'red', textAlign: 'center'}}>{this.state.error}</h5>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CompanyLogin