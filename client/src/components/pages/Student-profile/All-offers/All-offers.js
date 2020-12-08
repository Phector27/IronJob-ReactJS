import React, { Component } from 'react'
import OfferService from './../../../../service/offers.service'
import { Container, Row } from 'react-bootstrap'
import AllOfferCard from './All-offer-card'
import Loader from './../../../shared/Loader/Loader'

class AllOffers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: undefined,
        }

        this.offerService = new OfferService()
    }

    componentDidMount = () => {
        this.offerService
            .getOffers()
            .then(res => this.setState({ offers: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container className="offer-list">
                    <h1>Ofertas de trabajo publicadas</h1>
                    <hr /> <br />
                    <br /> <br />
                    <Row>
                        {
                            this.state.offers
                                ?
                                this.state.offers.map(elm => <AllOfferCard key={elm._id} {...elm} />)
                                :
                                <Loader/>
                        }
                    </Row>
                </Container>
            </>

        )
    }
}

export default AllOffers