const dataMonetaryHelpController = require('../controllers/dataMonetaryHelpController');

module.exports = (app) => {
    /**
     * @swagger
     * /humanitarian/aid/{countryId}/{year}:
     *  get:
     *   summary: Return last five Years Records of humanitarian aid to a country
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
     *     description: records with the organizations and his amounts sorted by year
     *     content:
     *      application/json:
     *       schema:
     *        type: {}
     *        items: [{}]
     *    400:
     *     description: description about what causes it 
     *     
    */
    app.get('/humanitarian/aid/:countryId/:year', dataMonetaryHelpController.informationRequest);
}