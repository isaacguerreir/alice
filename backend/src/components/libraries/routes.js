module.exports = (service, logger, router) => {
	router.get('/', async (req, res) => {
		try {
			const result = service.getLibraries()
			res.status(200).send(result)
		} catch (error) {
			logger.error(`<libraries/routes/> ${error.stack}`)
			res.status(500).send('Internal Error')
		}
	})

	return router
}
