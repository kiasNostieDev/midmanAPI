const router = require('express').Router()
const WebSocketClient = require('websocket').client

const client = new WebSocketClient()

function updateSocketClient() {
    client.connect('ws://localhost:8000/')
    client.on('connect', (connection) => {
        console.log('atescore')
        function sendResponse() {
            if (connection.connected) {
                connection.send(JSON.stringify({answer:69}))
            }
        }
        sendResponse()
        client.abort()
    })
}

router.get('/getHateScore', (req, res) => {
    console.log(req.body)
    updateSocketClient()
    res.send('IDK about hate scores')
})

module.exports = router