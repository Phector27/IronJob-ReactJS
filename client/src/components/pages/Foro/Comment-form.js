import React, { Component } from 'react'
import CommentService from '../../../service/comments.service'
import { Container, Button, Form } from 'react-bootstrap'

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            photo: '',
            student: '',
            error: ''
        }
        this.commentService = new CommentService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.commentService
            .newComment(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => this.setState({ error: 'Error al comentar. Por favor, revisa los pasos realizados.' }))
    }

    componentDidMount = () => this.setState({ student: this.props.loggedUser.username, photo: this.props.loggedUser.profilePhoto })

    render() {
        return (
            <Container>
                <h1 style={{ fontWeight: '400' }}>Publica tu comentario!</h1>
                <hr />
                <h5 style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="comment">
                        <Form.Control as="textarea" rows={8} name="comment" value={this.state.comment} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="valoration">
                        <Form.Label style={{ fontWeight: '400', marginLeft: '15px' }}>Valoración de la plataforma del 1 al 5</Form.Label>
                        <Form.Control as="select" name="valoration" onChange={this.handleInputChange}>
                            <option>⭐</option>
                            <option>⭐⭐</option>
                            <option>⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐⭐</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="dark btn-block" type="submit">Enviar comentario</Button>
                </Form>
            </Container>
        )
    }
}

export default CommentForm