var jsonServer = require('json-server')

// Returns an express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors, and no-cache)
server.use(jsonServer.defaults())

var router = jsonServer.router('db.json')
server.use(router)

server.listen(4000)
console.log('Listening at 4000')
