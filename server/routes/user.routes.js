const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneUser/:user_id', (req, res) => {

    User
        .findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.delete('/delete/:user_id', (req, res) => {

    User
        .findByIdAndRemove(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.put('/editProfile/:profile_id', (req, res, next) => {

    User
        .findByIdAndUpdate(req.params.profile_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

module.exports = router