const mongoose = require('mongoose')
const Book = require('./models/Book')
require('dotenv').config()

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  await Book.deleteMany({})
  const books = [
    { title:'The Little Cloud', author:'Eric Carle', ageGroup:'3-6', description:'A lovely picture book', coverUrl:'/covers/cloud.jpg' },
    { title:'Forest Friends', author:'A. Author', ageGroup:'6-9', description:'Adventures in the woods', coverUrl:'/covers/forest.jpg' }
  ]
  await Book.insertMany(books)
  console.log('Seeded')
  process.exit(0)
}
seed()
