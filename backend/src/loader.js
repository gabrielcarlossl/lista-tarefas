const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)

const cors = require('cors')

server.use(cors())