const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// router.post('/places', (req, res) => {
//    res.send('POST /places')
// })

// //Commenting out all of this code below

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