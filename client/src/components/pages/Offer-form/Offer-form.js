import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Button, Form } from 'react-bootstrap'


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
            company: ''
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
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.setState({company: this.props.loggedUser._id})

    render() {
        return (

            <Container>
                <h1>Nueva oferta de empleo</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre de la empresa</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label>Título de tu oferta</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <fieldset>
                        <Form.Group controlId="study">
                            <Form.Label as="legend">
                                Especialidad</Form.Label>
                            <Form.Check
                                type="radio"
                                label="UI/UX"
                                value="UI/UX"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Web Development"
                                value="Web Development"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Cyber"
                                value="Cyber"
                                name="study"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </fieldset>
                    <Form.Group controlId="location">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control type="text" name="location" value={this.state.location} onChange={this.handleInputChange} />
                    </Form.Group>
                    <fieldset>
                        <Form.Group controlId="style">
                            <Form.Label as="legend">
                                Tipo de empleo</Form.Label>
                            <Form.Check
                                type="radio"
                                label="Remoto"
                                value="Remoto"
                                name="style"
                                onChange={this.handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Presencial"
                                value="Presencial"
                                name="style"
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </fieldset>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={10} type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </Form.Group>
                    <small className="form-text text-muted"><i>Solo compartiremos tu email de contacto con el equipo de IronHack.</i></small><hr />
                    <Button variant="dark btn-block" type="submit">Crear nueva oferta de empleo</Button>
                </Form>
            </Container>
        )
    }
}

export default OfferForm