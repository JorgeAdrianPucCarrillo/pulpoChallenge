const dataMonetaryHelpController = require('../controllers/dataMonetaryHelpController');

module.exports = (app) => {
    /**
     * @swagger
     * /humanitarian/aid/{countryId}/{year}:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to a country since a selected year
     *   tags: [HumanitarianAid]
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
     *         2020:
     *          type: object
     *          properties:
     *           SIDA:
     *            type: number
     *         2019:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *         2018:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *         2017:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *           Folke Academy:
     *            type: number
     *         2016:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *    400:
     *     description: description about what causes it 
     *     properties:
     *      message:
     *       type: string
     *       description: organizationName would be substituted with name of the organization who made the charity, the value number is the quantity of that transaction
     *     
    */
    app.get('/humanitarian/aid/:countryId/:year', dataMonetaryHelpController.informationRequest);
    /**
     * @swagger
     * /humanitarian/aid/sudan:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to Sudan 
     *   tags: [HumanitarianAidSudan]
     *   responses:
     *    200:
     *     description: return the records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         2020:
     *          type: object
     *          properties:
     *           SIDA:
     *            type: number
     *         2019:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *         2018:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *         2017:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *           Folke Academy:
     *            type: number
     *         2016:
     *          type: object
     *          properties:
     *           Folke Bernadotte Academy:
     *            type: number
     *    400:
     *     description: description about what causes it 
     *     
    */
    app.get('/humanitarian/aid/sudan', dataMonetaryHelpController.informationRequestSudan);
}