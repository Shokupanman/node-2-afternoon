let express = require('express')
let SERVER_PORT = 3001
let app = express()
let message_controller = require('./Controllers/message_controller')


app.use(express.json())
app.use(express.static(__dirname+'/../public/build'))

let messageBaseUrl = '/api/messages' ;
app.post(messageBaseUrl, message_controller.create)
app.get(messageBaseUrl, message_controller.read)
app.put(`${messageBaseUrl}/:id`, message_controller.update)
app.delete(`${messageBaseUrl}/:id`, message_controller.delete)


app.listen( SERVER_PORT, () => {
    console.log(`${SERVER_PORT} Du yuz evn runnn dou??`)
})
