import React, { Component } from 'react'
import OfferService from './../../../../service/offers.service'
import { Container, Row, Modal, Col, Toast } from 'react-bootstrap'
import AllOfferCard from './All-offer-card'
import Loader from './../../../shared/Loader/Loader'
import ApplyForm from './../Student-apply-contact-form'
import SearchBar from './../../../shared/Searchbar/Searchbar'
import IronLogo  from './../../../layout/Navigation/images/LOGO-IRONJOB-1LINE.png'

class AllOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
            showApplyModal: false,
            offerToApply: undefined,
            offersSearch: undefined,
            mixChecked: false,
            remoteChecked: false,
            presentialChecked: false,
            showToast: false,
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

    handleApplyModal = (popUp, visible, offer) => this.setState({ [popUp]: visible, offerToApply: offer })

    handleRemote = () => {
        const remoteOffers = this.state.offersSearch
        const copy2Offers = remoteOffers.filter(elm => elm.style === 'Remoto')
        this.setState({ offers: copy2Offers })
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
                    <h1 style={{ fontWeight: '400' }}>Ofertas de trabajo publicadas</h1>
                    <br />
                    <Row className="justify-content-lg-center">
                        <Col lg={6}>
                            <SearchBar searchFor={value => this.searchFor(value)} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '25px' }} className="justify-content-lg-center">
                    <Col lg={{ span: 4, offset: 2 }}>
                            <p style={{ fontWeight: '400', marginLeft: '100px' }}>Filtrar por:</p>
                            <label style={{fontWeight: '400'}}>
                                Remoto
                                <input
                                    onClick={() => this.setState({remoteChecked: !this.state.remoteChecked}, () => this.handleRemote())}
                                    name="Remoto"
                                    type="checkbox"
                                     />
                            </label>
                            <label style={{ marginLeft: '20px', fontWeight: '400'}}>
                                Presencial
                                <input
                                    onClick={() => this.setState({presentialChecked: !this.state.presentialChecked}, () => this.handlePersonal())}
                                    name="Presencial"
                                    type="checkbox"
                                     />
                            </label>
                            <label style={{ marginLeft: '20px', fontWeight: '400'}}>
                                Mixto
                                <input
                                    onClick={() => this.setState({mixChecked: !this.state.mixChecked}, () => this.handleMix())}
                                    name="Mixto"
                                    type="checkbox"
                                    />
                            </label>
                        </Col>
                    </Row>
                    <hr /> <br />
                    <h5 style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</h5>
                    <Row>
                        {
                            this.state.offers
                                ?
                                this.state.offers.map(elm => <AllOfferCard key={elm._id} {...elm} handleModal={() => this.handleApplyModal('showApplyModal', true, elm)} />)
                                :
                                <Loader />
                        }
                    </Row>
                <Toast show={this.state.showToast} onClose={() => this.handleApplyModal('showToast', false)} delay={5000} autohide style={{position: 'fixed', top: 70, rigth: 10, width: 450, zIndex: '9999'}}>
                    <Toast.Header  >
                        <img src={IronLogo} style={{width: '15%'}} className="rounded mr-2" alt="IronJob Logo" />
                        <strong className="mr-auto">IronJob</strong>
                    </Toast.Header>
                    <Toast.Body>Tu mensaje ha sido enviado con éxito! <br />Mucha suerte 🍀</Toast.Body>
                </Toast>
                </Container>
                <Modal className="modal-create" size="lg" show={this.state.showApplyModal} onHide={() => this.handleApplyModal('showApplyModal', false)}>
                    <Modal.Body>
                        <ApplyForm closeModal={() => this.handleApplyModal('showApplyModal', false)} showToast={() => this.handleApplyModal('showToast', true)}  loggedUser={this.state.loggedInUser} offer={this.state.offerToApply} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default AllOffers