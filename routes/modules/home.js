const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  try {

    const userId = req.user._id
    const categoryId = req.query.category
    const categories = await Category.find().sort('id').lean()

    const filter = categoryId ? { userId, categoryId } : { userId }
    const records = await Record.find(filter).lean()
    
    records.forEach(record => {
      record.icon = categories.filter(category => (record.categoryId).equals(category._id))[0].icon
    })

    let totalAmount = records.reduce((total, record) => {
      return total + Number(record.amount)
    }, 0)

    return res.render('index', { records, totalAmount, categories })

  } catch (err) {
    console.log(err)
  }
})

module.exports = router