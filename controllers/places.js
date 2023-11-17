const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })


router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place:places[id] })
  }
})

 router.get('/places/:id/edit', (req, res) => {
    res.send('GET /place/:id/edit')
 })

 router.delete('/places/:id', (req, res) => {
    res.send('DELETE /places/:id')
 })

  router.post('/places/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
  })

  router.delete('/places/:id/rant/:rantId', (req, res) => {
    res.send('DELETE /places/:id/rant/:rantId')
  })

  

module.exports = router 
