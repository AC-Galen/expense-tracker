const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  try {
    let totalAmount = 0
    const userId = req.user._id
    const categoryId = req.query.category
    const categories = await Category.find().sort('id').lean()

    let records = categoryId ? await Record.find({ userId, categoryId }).lean() : await Record.find({ userId }).lean()

    for (let item of records) {
      categories.filter(category => {
        if ((category._id).toString() === (item.categoryId).toString()) {
          item.icon = category.icon
        }
      })
      totalAmount += item.amount
    }

    return res.render('index', { records, totalAmount, categories })

  } catch (err) {
    console.log(err)
  }
})

module.exports = router