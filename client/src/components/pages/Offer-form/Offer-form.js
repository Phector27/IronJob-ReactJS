import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'

class OfferForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            location: '',
            study: '',
            style: '',
            name: '',
            email: '',
            description: '',
            company: '',
            reference: '',
            error: ''
        }
        this.offerService = new OfferService()
    }
    
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.offerService
            .newOffer(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err=> this.setState({error: 'Error al editar oferta. Revisa los datos por favor.' }))
    }
        
    componentDidMount = () => {
        const randomOffer = Math.floor(Math.random() * (15 - 1)) + 1
        this.setState({ company: this.props.loggedUser._id, name: this.props.loggedUser.name, reference: this.props.loggedUser._id.slice(3, (randomOffer+randomOffer)) })
    }
    
    render() {
        return (
            <Container>
                <h1 style={{fontWeight: '400'}}>Nueva oferta de empleo</h1>
                <hr />
                <h5 style={{color: 'red', textAlign: 'center'}}>{this.state.error}</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}}>Nombre de la empresa</Form.Label>
                        <Form.Control type="text" minlength="3" name="name" readOnly value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}}>Título de tu oferta</Form.Label>
                        <Form.Control type="text" minlength="5" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                        <Row>
                            <Col>
                        <Form.Group controlId="study">
                            <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}} as="legend">
                                Especialidad</Form.Label>
                            <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="UI/UX"
                                value="UI/UX"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="Web Development"
                                value="Web Development"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="Cyber"
                                value="Cyber"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                            </Col>
                        <Col>
                        <Form.Group controlId="style">
                            <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}} as="legend">
                                Tipo de empleo</Form.Label>
                            <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="Remoto"
                                value="Remoto"
                                name="style"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="Presencial"
                                value="Presencial"
                                name="style"
                                onChange={this.handleInputChange}
                                />
                                <Form.Check style={{marginLeft: '10px'}}
                                type="radio"
                                label="Mixto"
                                value="Mixto"
                                name="style"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="location">
                        <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}}>Ubicación</Form.Label>
                        <Form.Control type="text" minlength="3" name="location" value={this.state.location} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}}>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={10} type="text" placeholder="Describe tu oferta de empleo, salario anual, experiencia requerida..." name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label style={{marginLeft: '10px', fontSize: '1.2em', fontWeight: '300'}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" minlength="6" name="email" value={this.state.email} onChange={this.handleInputChange} />
                        <small style={{ marginLeft: '10px', marginTop: '-10px' }}className="form-text text-muted"><i>Solo compartiremos tu email de contacto con el equipo de IronHack.</i></small>
                    </Form.Group>
                    <Form.Label style={{fontWeight: 'bold', marginLeft: '10px', fontSize: '1.2em'}}>Referencia de oferta</Form.Label>
                    <Form.Group controlId="reference">
                        <Form.Control style={{marginTop: '-10px'}} type="text" name="reference" readOnly value={this.state.reference} onChange={this.handleInputChange} /><hr />
                    </Form.Group>
                    <Button variant="dark btn-block" type="submit">Crear nueva oferta de empleo</Button>
                </Form>
            </Container>
        )
    }
}

export default OfferForm