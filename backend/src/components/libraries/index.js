const express = require('express')
const logger = require('infra/logger')
const {
	v1Router
} = require('interfaces/http')
const router = require('./routes')

const librariesService = require('./service')(logger)
const routes = require('./routes')(librariesService, logger, express.Router())

v1Router.use('/libraries', routes)

module.exports = librariesService
