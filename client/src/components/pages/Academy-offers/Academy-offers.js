import React, { Component } from 'react'
import OfferService from './../../../service/offers.service'
import { Container, Row, Modal, Col } from 'react-bootstrap'
import OfferCard from './../Offers-list/Offer-card'
import Loader from './../../shared/Loader/Loader'
import OfferEdit from './../Offer-edit/Offer-edit'
import SearchBarIdOffer from './../../shared/Searchbar/Searchbar-id-offer'

class AcademyOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showEditModal: false,
            offersSearch: undefined,
            mixChecked: false,
            remoteChecked: false,
            presentialChecked: false,
            error: ''
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => this.refreshOfferList()

    refreshOfferList = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data, offersSearch: res.data }))
            .catch(err => this.setState({ error: 'Error al cargar las ofertas de empleo. Prueba a recargar de nuevo.' }))
    }

    deleteOffer = offerId => {
        this.offerService
            .deleteOffer(offerId)
            .then(() => this.refreshOfferList())
            .catch(err => this.setState({ error: 'Error al eliminar la oferta de empleo. Prueba de nuevo.' }))
    }

    handleEditModal = (visible, offer) => this.setState({ showEditModal: visible, offerToEdit: offer })

    searchFor = search => {
        const copyOffers = [...this.state.offersSearch]
        const filterProds = copyOffers.filter(elm => elm.reference.toLowerCase().includes(search.toLowerCase()))
        this.setState({ offers: filterProds })
    }
    
    handleRemote = () => {
        const remoteOffers = this.state.offersSearch
        const copy2Offers = remoteOffers.filter(elm => elm.style === 'Remoto')
        this.state.remoteChecked ? this.setState({ offers: copy2Offers }) : this.setState({ offers: remoteOffers })
    }

    handlePersonal = () => {
        const remoteOffers = this.state.offersSearch
        const copy2Offers = remoteOffers.filter(elm => elm.style === 'Presencial')
        this.state.presentialChecked ? this.setState({ offers: copy2Offers }) : this.setState({ offers: remoteOffers })
    }

    handleMix = () => {
        const remoteOffers = [...this.state.offersSearch]
        const copy2Offers = remoteOffers.filter(elm => elm.style === 'Mixto')
        this.state.mixChecked ? this.setState({ offers: copy2Offers }) : this.setState({ offers: remoteOffers })
    }

    render() {
        return (
            <>
                <Container fluid className="offer-list">
                    <h1>Ofertas de trabajo publicadas</h1>
                    <br />
                    <Row className="justify-content-lg-center">
                        <Col lg={6}>
                            <SearchBarIdOffer searchFor={value => this.searchFor(value)} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '25px' }} className="justify-content-lg-center">
                        <Col lg={{ span: 4, offset: 2 }}>
                            <p style={{ fontWeight: '400', marginLeft: '100px' }}>Filtrar por:</p>
                            <label>
                                Remoto:
                                <input
                                    onClick={() => this.setState({remoteChecked: !this.state.remoteChecked}, () => this.handleRemote())}
                                    name="Remoto"
                                    type="checkbox"
                                     />
                            </label>
                            <label style={{ marginLeft: '20px' }}>
                                Presencial:
                                <input
                                    onClick={() => this.setState({presentialChecked: !this.state.presentialChecked}, () => this.handlePersonal())}
                                    name="Presencial"
                                    type="checkbox"
                                     />
                            </label>
                            <label style={{ marginLeft: '20px' }}>
                                Mixto:
                                <input
                                    onClick={() => this.setState({mixChecked: !this.state.mixChecked}, () => this.handleMix())}
                                    name="Mixto"
                                    type="checkbox"
                                    />
                            </label>
                        </Col>
                    </Row>
                    <hr /> <br />
                    <h5 style={{color: 'red', textAlign: 'center'}}>{this.state.error}</h5>
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