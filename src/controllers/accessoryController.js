const router = require('express').Router()
const Accessory = require('../models/Accessory')

router.get('/create', (req, res) => {
  res.render('accessory/create')
})

router.post('/create', (req, res) => {
  Accessory.create(req.body)
  res.redirect('/')
})

module.exports = router
