const msg = require('../utils/message');
const sortInfo = require('../utils/sortInfo');
const saveInfo = require('../utils/savedInfo');
const config = require('../config/config.js')
const axios = require('axios');
class dataMonetaryHelpQuery {
    async dataMonetaryHelp(countryId, year) {
        try{
            let lessTime = 0
            //verificando fecha ------------------------------------------
            try{
                lessTime=Number(year)-5
                if (lessTime<0 || lessTime > new Date().getFullYear()){
                    const mensaje = msg.msgError(400, 'La fecha debe ser una fecha real');
                    return reject(mensaje);
                }
            }catch(e){
                const mensaje = msg.msgError(400, 'La fecha debe ser un año numerico');
                return reject(mensaje);
            }

            // verificando si existe en cache ------------------------------------------
            const cacheInfo = saveInfo.readRequest(countryId, year)
            if (cacheInfo) {
                let respCache = JSON.parse(cacheInfo)
                return msg.msgSuccess(200,'exito',respCache)
            }
            
            //se decide mantener uriPath como una sola linea de query, con el fin que el usuario pueda modificar lo menos posible este mismo ------------------------------------------
            let uriPath='/datastore/activity/select?q=recipient_country_code:'+countryId+'%20AND%20transaction_value_value_date:['+lessTime+'-01-01T00:00:00Z%20TO%20'+year+'-01-01T00:00:00Z]&fl=transaction_value,participating_org_narrative,transaction_value_value_date,participating_org_ref'
            const tockenHeader = {headers: {'Ocp-Apim-Subscription-Key':config.confiLoad().IATIKEY}}
            let hostUrls= 'https://api.iatistandard.org'+uriPath
            try{
                const response = await axios.get(hostUrls, tockenHeader)
                const resp = sortInfo.sortInformation(response.data.response)
                saveInfo.writeRequest(resp,countryId, year)
                return msg.msgSuccess(200,'exito',resp)
            }catch(e){
                const mensaje = msg.msgError(502, 'error durante la conexion');
                return mensaje
            }
        }catch(error){
            mensaje = msg.msgError(400, 'no se pudo obtener información');
            return mensaje
        }
    }
}
module.exports = new dataMonetaryHelpQuery()