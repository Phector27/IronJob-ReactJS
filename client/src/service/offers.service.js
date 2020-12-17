import axios from 'axios'

export default class OfferService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/offers',
            withCredentials: true
        })
    }

    getOffers = () => this.apiHandler.get('/getAllOffers')
    newOffer = OfferInfo => this.apiHandler.post(`/newOffer`, OfferInfo)
    deleteOffer = OfferIdDeleted => this.apiHandler.delete(`/delete/${OfferIdDeleted}`)
    editOffer = (OfferId, OfferInfo) => this.apiHandler.put(`/editOffer/${OfferId}`, OfferInfo)
}