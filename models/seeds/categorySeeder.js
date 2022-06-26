const db = require('../../config/mongoose')
const Category = require('../category')
const categorySeeder = require('./category.json')

db.once('open', async() => {
  await Category.create(categorySeeder)
  process.exit()
})