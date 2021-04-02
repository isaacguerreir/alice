require('dotenv').config()
const {
	name,
	version
} = require('../../../package.json')

process.env.APP_VERSION = version
process.env.APP_NAME = name

const config = require('./config.json')
const envConfig = config[process.env.NODE_ENV] || {}
const warns = []

Object.keys(envConfig).forEach((key) => {
	if (!process.env[key]) {
		process.env[key] = envConfig[key]
	} else {
		warns.push(`process.env[${key} is set globally`)
	}
})

const logger = require('infra/logger');

if (0 < warns.length) {
	for (const warn of warns) {
		logger.warn(warn);
	}
}

const environmentVariables = [
	{
		name: 'APP_NAME',
		required: true,
		printOnStart: true
	},
	{
		name: 'APP_VERSION',
		required: true,
		printOnStart: true
	},
	{
		name: 'LOG_LEVEL',
		required: false,
		printOnStart: true
	},
	{
		name: 'NODE_ENV',
		required: true,
		printOnStart: true
	},
	{
		name: 'PORT',
		required: true,
		printOnStart: true
	},

];

let error = false;
for (let envVar of environmentVariables) {
	if (envVar.required && !process.env[envVar.name]) {
		logger.error(`process.env[${envVar.name}] is required, aborting initialization`);
		error = true;
	}

	if (envVar.printOnStart) {
		if (process.env[envVar.name]) {
			logger.info(`process.env[${envVar.name}]=[${process.env[envVar.name]}]`);
		} else(logger.warn(`process.env[${envVar.name}] not found`));
	}
}

if (error) {
	process.exit(1);
}
