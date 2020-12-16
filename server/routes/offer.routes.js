const express = require('express')
const router = express.Router()

const Offer = require('../models/offer.model')

router.get('/getAllOffers', (req, res) => {

    Offer
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/newOffer', (req, res) => {

    const { title, location, study, style, description, name, email, company, reference } = req.body
    if (!title || !location || !study || !style || !description || !email) {
        res.render('company/company-profile', { errorMsg: 'Por favor, rellena todos los campos para crear la oferta' })
        return
    }

    Offer
        .create({ title, location, study, style, description, name, email, company, reference })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.delete('/delete/:offer_id', (req, res) => {

    Offer
        .findByIdAndRemove(req.params.offer_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})


router.get('/getOneOffer/:offer_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.offer_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Offer
        .findById(req.params.offer_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})


router.put('/editOffer/:offer_id', (req, res, next) => {

    const { title, location, study, style, description, name, email } = req.body

    Offer
        .findByIdAndUpdate(req.params.offer_id, { title, location, study, style, description, name, email })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})


module.exports = router