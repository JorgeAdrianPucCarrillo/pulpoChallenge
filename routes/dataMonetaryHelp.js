const dataMonetaryAidController = require('../controllers/dataMonetaryAidController');

module.exports = (app) => {
    /**
     * @swagger
     * /humanitarian/aid/{countryId}/{year}/json:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to a country since a selected year in a json format
     *   tags: [Humanitarian Aid Json Formated]
     *   parameters:
     *    - in: path
     *      name: countryId
     *      schema:
     *           type: string
     *      required: true
     *      description: String Id of the country who recips the humanitarian aid
     *    - in: path
     *      name: year
     *      schema:
     *           type: number
     *      required: true
     *      description: Year to start the research
     *   responses:
     *    200:
     *     description: return the records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: exito
     *         data:
     *          type: object
     *          properties:
     *           2020:
     *            type: object
     *            properties:
     *             SIDA:
     *              type: number
     *           2019:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *           2018:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *           2017:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *             Folke Academy:
     *              type: number
     *           2016:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *    400:
     *     description: description about what causes it 
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: no se pudo obtener información
     *         data:
     *          type: object
    */
    app.get('/humanitarian/aid/:countryId/:year/json', dataMonetaryAidController.informationRequestAsJson);
    /**
     * @swagger
     * /humanitarian/aid/{countryId}/{year}/array:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to a country since a selected year in a data array sorted format
     *   tags: [Humanitarian Aid Array Formated]
     *   parameters:
     *    - in: path
     *      name: countryId
     *      schema:
     *           type: string
     *      required: true
     *      description: String Id of the country who recips the humanitarian aid
     *    - in: path
     *      name: year
     *      schema:
     *           type: number
     *      required: true
     *      description: Year to start the research
     *   responses:
     *    200:
     *     description: return the records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: exito
     *         data:
     *          type: array
     *          items:
     *           type: object
     *           properties:
     *            yearTransaction:
     *             type: number
     *             example: 2020
     *            organizations: 
     *             typer: array
     *             items:
     *              type: object
     *              properties:
     *               name:
     *                type: string
     *                example: SEUA
     *               value:
     *                type: number
     *                example: 5875.5
     *           
     *    400:
     *     description: description about what causes it 
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: no se pudo obtener información
     *         data:
     *          type: object     
    */
    app.get('/humanitarian/aid/:countryId/:year/array', dataMonetaryAidController.informationRequestAsArray);
    /**
     * @swagger
     * /humanitarian/aid/sudan/json:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to Sudan in a json format
     *   tags: [Humanitarian Aid Sudan Json Formated]
     *   responses:
     *    200:
     *     description: return the records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: exito
     *         data:
     *          type: object
     *          properties:
     *           2020:
     *            type: object
     *            properties:
     *             SIDA:
     *              type: number
     *           2019:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *           2018:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *           2017:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *             Folke Academy:
     *              type: number
     *           2016:
     *            type: object
     *            properties:
     *             Folke Bernadotte Academy:
     *              type: number
     *    400:
     *     description: description about what causes it 
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: no se pudo obtener información
     *         data:
     *          type: object  
    */
    app.get('/humanitarian/aid/sudan/json', dataMonetaryAidController.informationRequestSudanJson);
    /**
     * @swagger
     * /humanitarian/aid/sudan/array:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to a country since a selected year in a data array sorted format
     *   tags: [Humanitarian Aid Sudan Array Formated]
     *   responses:
     *    200:
     *     description: return the records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: exito
     *         data:
     *          type: array
     *          items:
     *           type: object
     *           properties:
     *            yearTransaction:
     *             type: number
     *             example: 2020
     *            organizations: 
     *             typer: array
     *             items:
     *              type: object
     *              properties:
     *               name:
     *                type: string
     *                example: SEUA
     *               value:
     *                type: number
     *                example: 5875.5
     *           
     *    400:
     *     description: description about what causes it 
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         status:
     *          type: number
     *          example: 200
     *         message:
     *          type: string
     *          example: no se pudo obtener información
     *         data:
     *          type: object   
    */
    app.get('/humanitarian/aid/sudan/array', dataMonetaryAidController.informationRequestSudanArray);
}