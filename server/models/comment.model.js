const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({

    comment: String,
    student: String,
    valoration: String
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment