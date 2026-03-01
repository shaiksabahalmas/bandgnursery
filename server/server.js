const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// routes
const booksRouter = require('./routes/books')
app.use('/api/books', booksRouter)

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))
  })
  .catch(err => console.error('Mongo connection error:', err))
