import React, { Component } from 'react'
import OfferService from './../../../../service/offers.service'
import { Container, Row, Modal } from 'react-bootstrap'
import AllOfferCard from './All-offer-card'
import Loader from './../../../shared/Loader/Loader'
import ApplyForm from './../Student-apply-contact-form'

class AllOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showApplyModal: false,
            offerToApply: undefined
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data }))
            .catch(err => console.log(err))
    }

    handleApplyModal = (visible, offer) => this.setState({ showApplyModal: visible, offerToApply: offer })

    render() {
        return (
            <>
                <Container className="offer-list">
                    <h1 style={{fontWeight: '400'}}>Ofertas de trabajo publicadas</h1>
                    <hr /> <br />
                    <br /> <br />
                    <Row>
                        {
                            this.state.offers
                                ?
                                this.state.offers.map(elm => <AllOfferCard key={elm._id} {...elm} handleModal={() => this.handleApplyModal(true, elm)} />)
                                :
                                <Loader />
                        }
                    </Row>
                </Container>

                <Modal className="modal-create" size="lg" show={this.state.showApplyModal} onHide={() => this.handleApplyModal(false)}>
                    <Modal.Body>
                        <ApplyForm  closeModal={() => this.handleApplyModal(false)} loggedUser={this.state.loggedInUser} offer={this.state.offerToApply} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default AllOffers