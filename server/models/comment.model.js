const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({

    comment: String,
    student: {
        type: Schema.Types.String,
        ref: 'User'
    },
    photo: {
        type: Schema.Types.String,
        ref: 'User'
    },
    valoration: String
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment