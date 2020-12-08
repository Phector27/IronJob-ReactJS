import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Row, Modal } from 'react-bootstrap'
import OfferCard from './../Offers-list/Offer-card'
import Loader from './../../shared/Loader/Loader'
import OfferEdit from './../Offer-edit/Offer-edit'

class AcademyOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showEditModal: false,
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data }))
            .catch(err => console.log(err))
    }

    deleteOffer = offerId => {
        this.offerService
            .deleteOffer(offerId)
            .then(() => this.refreshOfferList())
            .catch(err => console.log(err))
    }

    handleEditModal = (visible, offer) => this.setState({ showEditModal: visible, offerToEdit: offer })


    render() {
        return (
            <>
                <Container className="offer-list">
                    <h1>Ofertas de trabajo publicadas</h1>
                    <hr /> <br />
                    <Row>
                        {
                            this.state.offers
                                ?
                                this.state.offers.map(elm => <OfferCard key={elm._id} {...elm} deleteElement={() => this.deleteOffer(elm._id)} handleModal={() => this.handleEditModal(true, elm)} />)
                                :
                                <Loader/>
                        }
                    </Row>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <OfferEdit closeModal={() => this.handleEditModal(false)} updateList={this.refreshOfferList} offer={this.state.offerToEdit} />
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}

export default AcademyOffers