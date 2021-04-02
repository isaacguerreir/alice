const path = require('path')
const winston = require('winston')
require('winston-daily-rotate-file')

const logPath = process.env.LOG_PATH || './logs'
const levels = winston.config.npm.levels

const level = Object.prototype.hasOwnProperty.call(levels, process.env.LOG_LEVEL) ? process.env.LOG_LEVEL : 'info';

let dailyRotateFile = new winston.transports.DailyRotateFile({
    filename: path.join(logPath, 'alice-core-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true
})

const logger = winston.createLogger({
    level,
    levels,
    transports: [
       dailyRotateFile 
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(info => {
            return `${info.timestamp} [${info.level}] ${info.message}`
        })
    )
})

if (process.env.NODE_ENV !== 'prod') {
    logger.add(new winston.transports.Console({
        colorize: true
    }))
}


logger.stream = {
    write: function(message) {
        logger.info(message.split('\n')[0])
    }
}

logger.warn('Logger level set to: ' + level)

module.exports = logger
