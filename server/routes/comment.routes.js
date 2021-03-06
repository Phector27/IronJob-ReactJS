const express = require('express')
const router = express.Router()
const Comment = require('../models/comment.model')

router.get('/getAllComments', (req, res) => {

    Comment
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newComment', (req, res) => {

    const { comment, valoration, student, photo } = req.body

    Comment
        .create({ comment, valoration, student, photo } )
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:comment_id', (req, res) => {

    Comment
        .findByIdAndRemove(req.params.comment_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})

router.put('/editComment/:comment_id', (req, res, next) => {

    const { comment, valoration }= req.body

    Comment
        .findByIdAndUpdate(req.params.comment_id, { comment, valoration })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
    
})

module.exports = router