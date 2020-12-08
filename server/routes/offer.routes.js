const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Offer = require('../models/offer.model')


// const isLogged = (req, res, next) => req.isAuthenticated() ? next() : res.render('company/company-login', { errorMsg: 'Acceso denegado. Haz login para acceder a esta zona de la web.' })
// const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('company/company-login', { errorMsg: 'Acceso denegado. No tienes permisos para ver esta zona de la web. Por favor, contacta con un administrador de IronHack para que modifique tus permisos.' })


// router.get('/', (req, res) => res.render('company/company-index'))


router.get('/getAllOffers', (req, res) => {

    Offer
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/newOffer', (req, res) => {

    const { title, location, study, style, description, name, email, company } = req.body
    if (!title || !location || !study || !style || !description || !email) {
        res.render('company/company-profile', { errorMsg: 'Por favor, rellena todos los campos para crear la oferta' })
        return
    }

    Offer
        .create({ title, location, study, style, description, name, email, company })
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