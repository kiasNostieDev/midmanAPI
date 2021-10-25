const router = require('express').Router()

router.get('/getHateScore', (req, res) => {
    console.log('atescore')
    res.send('IDK about hate scores')
})

module.exports = router