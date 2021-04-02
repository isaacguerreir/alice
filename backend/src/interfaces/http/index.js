const logger = require('infra/logger')
const express = require('express')
const http = require('http')
const app = express()
const httpServer = http.createServer(app)
const loggerMiddleware = require('middleware/logger')
const apiRouter = express.Router()
const v1Router = express.Router()
const bodyParser = require('body-parser')

app.use(loggerMiddleware)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRouter)
apiRouter.use('/v1', v1Router)

module.exports = {
        app,
        apiRouter,
        httpServer,
        logger,
        v1Router
}
