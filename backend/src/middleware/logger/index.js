const logger = require('infra/logger')
const morgan = require('morgan')

module.exports = morgan('dev', { stream: logger.stream })

