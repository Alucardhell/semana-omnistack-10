const express = require('express')
const mongoose = require('mongoose')
const password = require('../password')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const {
    setupWebsocket
} = require('./websocket')

const app = express()
const serve = http.Server(app)

setupWebsocket(serve)

mongoose.connect(`mongodb+srv://alucardhell:${password}@cluster0-t6xdd.mongodb.net/weak10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors())
app.use(express.json())

app.use(routes)

serve.listen(3333)