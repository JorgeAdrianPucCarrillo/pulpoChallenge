const dataMonetaryHelpController = require('../controllers/dataMonetaryHelpController');

module.exports = (app) => {
    /**
     * @api {post} /data/monetary/help/:id/:year
     * @apiName dataMonetaryHelp
     * @apiGroup monetaryHelp
     * 
     * @apiExample Example usage:
     *      http://localhost/data/monetary/help/:countryId/:year
     * 
     * @apiParam {String} countryId: id del pais del cual se quiere obtener la información
     *                               id of the country that obtain the data
     * @apiParam {Number} year: año a partir del cual se quiere obtener la informacion 5 años hacia atras
     *                          year to obtain the information to the last 5 years
     * 
     * 
     * @apiError no_valid_data information.
     * 
     * @apiSuccessExample Success-Response-200:
     * {
            "status": 200,
            "message": "Datos Encontrados",
            "data": []
     * }
     * @apiErrorExample Error-400:
     * {
            "status": 400,
            "message": "ha ocurrido un error al obtener los datos, verifica el ID y el AÑO",
            "details": {}
     * }
    */
    app.get('/data/monetary/help/:countryId/:year', dataMonetaryHelpController.infromation);
}