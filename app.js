var express = require('express');
bodyparser = require('body-parser');
const config = require('./config/config.js');
var app = express();
const server = require('http').Server(app);
const path = require('path');
//swagger docs ----------------
const swaggerUIDoc = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerConfObj={
  definition:{
    openapi:"3.0.0",
    info: {
      title:"Pulpo Challenge",
      version:"1.0.0",
    },
    servers:[
      {
        url:"http://localhost:3000"
      }
    ]
  },
  apis: [path.join(__dirname,"./routes/*.js")]
}
app.use("/api-doc",swaggerUIDoc.serve,swaggerUIDoc.setup(swaggerJsDoc(swaggerConfObj)));
//app code---------------------
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const routes = require('./routes');
const { servers } = require('mongodb/lib/core/topologies/server');
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