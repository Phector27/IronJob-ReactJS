const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

  username: {
    type: String,
    unique: true,
  },
  name: String,
  profilePhoto: {
    type: String,
    default: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
  },
  password: {
    type: String,
    required: true
  },
  githubProfile: {
    type: String,
    default: 'https://github.com'
  },
  linkedInProfile: {
    type: String,
    default: 'https://linkedin.com'
  },
  videoProfile: {
    type: String,
    default: 'https://www.youtube.com/watch?v=KVakLLMBQxg'
  },
  descriptionUser: {
    type: String,
    default: 'Modifica esta descripción para tener un perfil adaptado a ti :)'
  },
  email: {
    type: String,
    default: ''
  },
  cvitae: {
    type: String,
    default: ''
  },
  phoneNumber: Number,
  role: {
      type: String,
      enum: ['IRONHACK-RECRUITER', 'BUSINESS-RECRUITER', 'Student', 'Guest', 'Inactive'],
      default: 'Guest',
    }
  }, { timestamps: true })

module.exports = mongoose.model('User', userSchema)