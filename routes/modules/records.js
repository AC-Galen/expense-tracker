const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/new', async (req, res) => {
  try {
    const categories = await Category.find().lean().sort('id')
    res.render('new', { categories })
  } catch(err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const record = req.body
    record.userId = req.user._id
    await Record.create(record)
    res.redirect('/')
  } catch(err) {
    console.log(err)
  }
})


router.get('/:id/edit', async (req, res) => {
  try {
    const _id = req.params.id
    const categories = await Category.find().lean().sort('id')
    const record = await Record.findById(_id).lean()
    const recordCategory = await Category.findById(record.categoryId).lean()
    record.category = recordCategory.name
    res.render('edit', { categories, record })
  } catch(err) {
    console.log(err)
  }
})


router.put('/:id', async (req, res) => {
  try {
    const _id = req.params.id
    let record = await Record.findById(_id)
    record = Object.assign(record, req.body)
    await record.save()
    res.redirect('/')

  }catch(err) {
    console.log(err)
  }
})

router.delete('/:id/delete', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({_id, userId})
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .then(err => console.log(err))
})



module.exports = router