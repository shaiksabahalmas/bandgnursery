const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

// GET /api/books
router.get('/', async (req,res) => {
  try{
    const books = await Book.find().sort({ createdAt: -1 })
    res.json(books)
  }catch(err){
    res.status(500).json({ error: err.message })
  }
})

// POST /api/books
router.post('/', async (req,res) => {
  try{
    const book = new Book(req.body)
    await book.save()
    res.status(201).json(book)
  }catch(err){
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
