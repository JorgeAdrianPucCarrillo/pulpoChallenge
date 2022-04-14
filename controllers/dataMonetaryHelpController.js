const queries = require('../query/dataMonetaryHelpQuery');

class dataMonetaryHelpController {
    //controlador en caso de error directo en funcion dataMonetaryHelp
    async informationRequest(req, res) {
        try{
            console.log("llega")
            const resp = await queries.dataMonetaryHelp(req.params.countryId, req.params.year)
            console.log(resp)
            res.status(resp.status).json(resp);
        }catch(err){
            //retorna respuesta error en caso de error causado durante la peticion o durante la funcion misma
            res.status(err.status || 500).json(err);
        }    
    }
}
module.exports = new dataMonetaryHelpController()