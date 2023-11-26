const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', { places })
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

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place: places[i], i})
}
})

 router.put('/:id', (req, res) => {
  places.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
 })

 router.get('/edit/:id/', (req, res) => {
  res.send('GET /edit/:id/')
})

  router.post('/rant/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
  })

  router.delete('/rant/:id/rant/:rantId', (req, res) => {
    res.send('DELETE /places/:id/rant/:rantId')
  })

  

module.exports = router 