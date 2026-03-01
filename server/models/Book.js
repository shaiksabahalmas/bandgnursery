const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  ageGroup: { type: String, default: '6-9' },
  description: String,
  coverUrl: String,
  createdAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Book', BookSchema)
