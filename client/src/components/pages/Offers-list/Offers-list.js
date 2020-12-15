import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Row, Button, Modal, Col } from 'react-bootstrap'
import OfferCard from './Offer-card'
import OfferForm from './../Offer-form/Offer-form'
import Loader from './../../shared/Loader/Loader'
import OfferEdit from './../Offer-edit/Offer-edit'
import './Offer-list.css'

class OfferList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showCreateModal: false,
            showEditModal: false,
            offerToEdit: undefined,
            error: ''
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data }))
            .catch(err => this.setState({ error: 'Error al cargar las ofertas de empleo. Prueba a recargar de nuevo.' }))
    }

    deleteOffer = offerId => {
        this.offerService
            .deleteOffer(offerId)
            .then(() => this.refreshOfferList())
            .catch(err => this.setState({ error: 'Error al eliminar la oferta de empleo. Prueba de nuevo.' }))
    }

    handleCreateModal = visible => this.setState({ showCreateModal: visible })

    handleEditModal = (visible, offer) => this.setState({ showEditModal: visible, offerToEdit: offer })


    render() {

        const offersCopy = this.state.offers ? this.state.offers.filter(elm => elm.company === this.props.loggedUser._id) : <Loader />

        return (
            <>
                <Container className="offer-list">
                    <h1>Ofertas de trabajo publicadas</h1>
                    <hr /> <br />
                    <div style={{ textAlign: 'center' }}>
                        <Button className="btn btn-md" onClick={() => this.handleCreateModal(true)} variant="dark" size="lg">Crear nueva oferta de empleo 📝</Button>
                    </div>
                    <br /> <br />

                    <Row>
                            {
                                this.state.offers
                                    ?
                                    offersCopy.map(elm => <OfferCard key={elm._id} {...elm} deleteElement={() => this.deleteOffer(elm._id)} handleModal={() => this.handleEditModal(true, elm)} />)
                                    :
                                    <Loader />
                            }
                    </Row>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showCreateModal} onHide={() => this.handleCreateModal(false)}>
                    <Modal.Body>
                        <OfferForm closeModal={() => this.handleCreateModal(false)} updateList={this.refreshOfferList} loggedUser={this.props.loggedUser} />
                    </Modal.Body>
                </Modal>

                <Modal className="modal-create" size="lg" show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <OfferEdit closeModal={() => this.handleEditModal(false)} updateList={this.refreshOfferList} offer={this.state.offerToEdit} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default OfferList