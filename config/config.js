
const conf = require('./config.json')
function confiLoad(){
    const environment = process.env.NODE_ENV || 'local'// dev si se quiere usar la llave de testing
    const environmentConfig = conf[environment]
    return environmentConfig
}

/**
 * @typedef configEnv
 * @type {Object}
 * @property {String} config.config_id - id  del environment
 * @property {Number} config.port - puerto en el que corre el sistema
 * 
*/
/**
 * @type {configEnv}
 */

module.exports = {
    confiLoad
}