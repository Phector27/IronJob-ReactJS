import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Button, Form } from 'react-bootstrap'


class OfferEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.offer.title,
            location: this.props.offer.location,
            study: this.props.offer.study,
            style: this.props.offer.style,
            name: this.props.offer.name,
            email: this.props.offer.email,
            description: this.props.offer.description,
            referencia: this.props.offer.referencia
        }
        this.offerService = new OfferService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.offerService
            .editOffer(this.props.offer._id, this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container>
                <h1>Editar oferta de empleo</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre de la empresa</Form.Label>
                        <Form.Control type="text" name="name" readOnly value={this.state.name} onChange={this.handleInputChange} />
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
                    <Form.Label style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '1.2em' }}>Referencia de oferta</Form.Label>
                    <Form.Group controlId="referencia">
                        <Form.Control style={{ marginTop: '-10px' }} type="text" name="referencia" readOnly value={this.state.referencia} onChange={this.handleInputChange} />
                    </Form.Group>
                    <small className="form-text text-muted"><i>Solo compartiremos tu email de contacto con el equipo de IronHack.</i></small><hr />
                    <Button variant="dark btn-block" type="submit">Editar oferta de empleo</Button>
                </Form>
            </Container>
        )
    }
}

export default OfferEdit