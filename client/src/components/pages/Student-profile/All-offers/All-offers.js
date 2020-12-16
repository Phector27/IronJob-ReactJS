import React, { Component } from 'react'
import OfferService from './../../../../service/offers.service'
import { Container, Row, Modal, Col } from 'react-bootstrap'
import AllOfferCard from './All-offer-card'
import Loader from './../../../shared/Loader/Loader'
import ApplyForm from './../Student-apply-contact-form'
import SearchBar from './../../../shared/Searchbar/Searchbar'

class AllOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showApplyModal: false,
            offerToApply: undefined,
            offersSearch: undefined,
            error: ''
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data, offersSearch: res.data }))
            .catch(err => this.setState({ error: 'Error al cargar las ofertas de empleo. Vuelve a intentarlo.' }))
    }

    searchFor = search => {
        const copyOffers = [...this.state.offersSearch]
        const filterProds = copyOffers.filter(elm => elm.study.toLowerCase().includes(search.toLowerCase()))
        this.setState({ offers: filterProds })
    }


    handleApplyModal = (visible, offer) => this.setState({ showApplyModal: visible, offerToApply: offer })

    render() {
        return (
            <>
                <Container fluid className="offer-list">
                    <h1 style={{ fontWeight: '400' }}>Ofertas de trabajo publicadas</h1>
                    <br />
                    <Row className="justify-content-lg-center">
                        <Col lg={6}>
                            <SearchBar searchFor={value => this.searchFor(value)} />
                        </Col>
                    </Row>
                    <hr /> <br />
                    <h5 style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</h5>
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
                        <ApplyForm closeModal={() => this.handleApplyModal(false)} loggedUser={this.state.loggedInUser} offer={this.state.offerToApply} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default AllOffers