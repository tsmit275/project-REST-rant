const router = require('express').Router()

// router.post('/places', (req, res) => {
//    res.send('POST /places')
// })

// //Commennting out all of this code below

//Get /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})
// router.get('/places/new', (req, res) => {
//    res.send('GET /places/new')
// })

// router.get('/places/:id', (req, res) => {
//    res.send('GET /places/:id')
// })

// router.post('/places/:id', (req, res) => {
//    res.send('POST /places/:id')
// })

// router.get('/places/:id/edit', (req, res) => {
//    res.send('GET /place/:id/edit')
// })

// router.delete('/places/:id', (req, res) => {
//    res.send('DELETE /places/:id')
// })

//  router.post('/places/:id/rant', (req, res) => {
//    res.send('POST /places/:id/rant')
//  })

//  router.delete('/places/:id/rant/:rantId', (req, res) => {
//    res.send('DELETE /places/:id/rant/:rantId')
//  })

//  router.get('*', (req,res) => {
//    res.status(404).send('<h1>404 Page</h1>')
//  })

module.exports = router 