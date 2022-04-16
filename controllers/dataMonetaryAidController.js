const queries = require('../query/dataMonetaryAidQuery');

class dataMonetaryHelpController {
    //controlador en caso de error directo en funcion dataMonetaryHelp
    async informationRequestAsJson(req, res) {
        try{
            const resp = await queries.dataMonetaryAidJson(req.params.countryId, req.params.year)
            res.status(resp.status).json(resp);
        }catch(err){
            //retorna respuesta error en caso de error causado durante la peticion o durante la funcion misma
            res.status(err.status || 500).json(err);
        }    
    }
    async informationRequestAsArray(req, res) {
        try{
            const resp = await queries.dataMonetaryAidArray(req.params.countryId, req.params.year)
            res.status(resp.status).json(resp);
        }catch(err){
            //retorna respuesta error en caso de error causado durante la peticion o durante la funcion misma
            res.status(err.status || 500).json(err);
        }    
    }
    async informationRequestSudanJson(req, res) {
        try{
            const resp = await queries.dataMonetaryAidJson('SD', new Date().getFullYear())
            res.status(resp.status).json(resp);
        }catch(err){
            //retorna respuesta error en caso de error causado durante la peticion o durante la funcion misma
            res.status(err.status || 500).json(err);
        }    
    }
    async informationRequestSudanArray(req, res) {
        try{
            const resp = await queries.dataMonetaryAidArray('SD', new Date().getFullYear())
            res.status(resp.status).json(resp);
        }catch(err){
            //retorna respuesta error en caso de error causado durante la peticion o durante la funcion misma
            res.status(err.status || 500).json(err);
        }    
    }
}
module.exports = new dataMonetaryHelpController()