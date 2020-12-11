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
    default: './images/profiledefault.png'
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
    default: ''
  },
  curriculum: {
    type: String,
    default: ''
  },
  role: {
      type: String,
      enum: ['IRONHACK-RECRUITER', 'BUSINESS-RECRUITER', 'Student', 'Guest', 'Inactive'],
      default: 'Guest',
    }
  }, { timestamps: true })

module.exports = mongoose.model('User', userSchema)