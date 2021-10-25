const webSocketsServerPort = 8000
const webSocketServer = require('ws').Server
const http = require('http')
const app = require('./rest')

const server = http.createServer()
const wsServer = new webSocketServer({
  server: server
});

server.on('request', app)

wsServer.on('connection', (ws) => {
    function sendMessage(message) {
        ws.send(JSON.stringify({ value: 23 }))
        wsServer.clients.forEach(client => {
            client.send(JSON.stringify({value:23}))
        })
    }
    console.log('new connection')
    ws.on('message', (message) => {
        sendMessage({message})
        console.log('inside message %s', message)
    })
    ws.send(JSON.stringify({ answer: 42 }))
})

server.listen(8000, () => {
    console.log('listenting by both')
})