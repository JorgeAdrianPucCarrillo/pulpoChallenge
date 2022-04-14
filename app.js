var express = require('express'),
helmet = require('helmet');
const { json } = require('express/lib/response');
bodyparser = require('body-parser');
const config = require('./config/config.js')
var app = express();
const server = require('http').Server(app)
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(helmet({ // se ha instalado helment como medida de seguridad
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false
}))
app.set('view engine', 'ejs');
const routes = require('./routes')
routes(app)
try {
  server.listen(config.confiLoad().port, () => {
    console.log('server: \x1b[32m%s\x1b[0m', 'Online')
    console.log('port: \x1b[32m%s\x1b[0m',config.confiLoad().port)
  })
} catch (e) {
  console.log(e)
  console.log("Error Server ----------------------------")
}