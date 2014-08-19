express = require 'express'
path = require 'path'
bodyParser = require 'body-parser'
# routes = requrie './routes'

app = express()
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname + '../../../public')))

# Routes

# app.get('/', routes.index)

app.listen(3000)
