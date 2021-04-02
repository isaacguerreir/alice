require('infra/config')
const logger = require('infra/logger')
const http = require('interfaces/http')
const SERVER_PORT = process.env.PORT || 3000;
require('components')

logger.info('Starting application...')
http.httpServer.listen(SERVER_PORT, () => {
        logger.info(`Application running on port ${SERVER_PORT}`)
})
logger.info('App started successfully.')

