var express = require('express'),
helmet = require('helmet')
bodyparser = require('body-parser');
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
  server.listen(3000, () => { console.log('Server: \x1b[32m%s\x1b[0m', 'Running on port 3000' ); });
} catch (e) {
  console.log(e)
  console.log("Error Server ----------------------------")
}
