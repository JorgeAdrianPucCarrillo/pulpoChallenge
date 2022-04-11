/**
 * estructura de respuesta del servidor al cliente cuando
 * el servidor responde de manera correcta
 * @param {number} status estado de respuesta del servidor
 * @param {string} message mensaje a mostrar al cliente
 * @param {*} data datos de la respuesta
 */
 function msgSuccess(status, message, data = []) {
    let obj = {
        status,
        message,
        data
    }
    return obj
}
/**
 * estrucutra de respuesta del servidor al cliente cuando el servidor
 * responde de manera incorrecta
 * @param {number} status estado de error de respuesta del servidor
 * @param {string} message mensaje de error a mostrar al cliente
 * @param {*} details detalles especificos del error
 */
function msgError(status, message, details = {}) {
    let obj = {
        status,
        message,
        details
    }
    return obj
}
module.exports = {
    msgError,
    msgSuccess
}