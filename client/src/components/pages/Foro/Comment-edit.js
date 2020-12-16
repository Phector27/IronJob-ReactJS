import React, { Component } from 'react'
import CommentService from '../../../service/comments.service'
import { Container, Button, Form } from 'react-bootstrap'

class CommentEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: this.props.comment.comment,
            username: this.props.comment.username,
            valoration: this.props.comment.valoration,
            error: ''
        }
        this.commentService = new CommentService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.commentService
            .editComment(this.props.comment._id, this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err=> this.setState({error: 'Error al editar tu comentario. Revisa los datos' }))
    }


    render() {
        return (

            <Container>
                <h1>Editar comentario</h1>
                <hr />
                <h5 style={{color: 'red', textAlign: 'center'}}>{this.state.error}</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="comment">
                        <Form.Control as="textarea" rows={8} name="comment" value={this.state.comment} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="valoration">
                        <Form.Label style={{ fontWeight: '400', marginLeft: '15px' }}>Edita tu Valoración</Form.Label>
                        <Form.Control as="select" name="valoration" onChange={this.handleInputChange}>
                            <option>⭐</option>
                            <option>⭐⭐</option>
                            <option>⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐⭐</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="dark btn-block" type="submit">Editar comentario</Button>
                </Form>
            </Container>
        )
    }
}

export default CommentEdit