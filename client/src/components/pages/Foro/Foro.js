import React, { Component } from 'react'
import CommentService from './../../../service/comments.service'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import CommentCard from './Comment-card'
import CommentForm from './Comment-form'
import Loader from './../../shared/Loader/Loader'
import CommentEdit from './Comment-edit'

class Foro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: undefined,
            showCreateModal: false,
            showEditModal: false,
            commentToEdit: undefined,
            error: ''
        }

        this.commentService = new CommentService()
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.commentService
            .getComments()
            .then(res => this.setState({ comments: res.data }))
            .catch(err => this.setState({ error: 'Error al cargar las ofertas de empleo. Prueba a recargar de nuevo.' }))
    }

    deleteComment = commentId => {
        this.commentService
            .deleteComment(commentId)
            .then(() => this.refreshOfferList())
            .catch(err => this.setState({ error: 'Error al eliminar la oferta de empleo. Prueba de nuevo.' }))
    }

    handleCreateModal = visible => this.setState({ showCreateModal: visible })

    handleEditModal = (visible, comment) => this.setState({ showEditModal: visible, commentToEdit: comment })


    render() {

        return (
            <>
                <Container className="offer-list">
                    <h2 style={{ textAlign: 'center' }}>Hola <strong>{this.props.loggedUser.username}</strong> déjanos un comentario :)</h2>
                    <p style={{textAlign: 'center', fontWeight: '300'}}>Gracias a vuestros comentarios, podremos seguir creciendo como plataforma.</p>
                    <hr /> <br />
                    <div style={{ textAlign: 'center' }}>
                        <Button className="btn btn-md" onClick={() => this.handleCreateModal(true)} variant="dark" size="md">Crear nuevo comentario 📝</Button>
                    </div>
                    <br /> <br />

                    <Row>
                            {
                                this.state.comments
                                    ?
                                    this.state.comments.map(elm => <CommentCard key={elm._id} {...elm} deleteElement={() => this.deleteComment(elm._id)} loggedUser={this.props.loggedUser} handleModal={() => this.handleEditModal(true, elm)} />)
                                    :
                                    <Loader />
                            }
                    </Row>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showCreateModal} onHide={() => this.handleCreateModal(false)}>
                    <Modal.Body>
                        <CommentForm closeModal={() => this.handleCreateModal(false)} updateList={this.refreshOfferList} loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal>

                <Modal className="modal-create" size="lg" show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <CommentEdit closeModal={() => this.handleEditModal(false)} updateList={this.refreshOfferList} loggedUser={this.props.loggedUser} comment={this.state.commentToEdit} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default Foro