const express = require('express')

//middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

//controllers
const treasureController = require('./controllers/auction_controller') 
const usersController = require('./controllers/users_controller') 
const sessionsController = require('./controllers/sessions_controller')

// access app object
const app = express()
const port = 3000

// start server
app.listen(port,
    () => console.log(`listening on port ${port}`)
)

