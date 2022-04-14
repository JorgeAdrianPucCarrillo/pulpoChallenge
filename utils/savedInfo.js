const fs = require('fs');
function writeRequest (info, key, year) {
    info = JSON.stringify(info)
    try{
        fs.writeFileSync("./requestFiles/searched key "+key+" on "+year+".txt",info,"utf8");
    }catch(e){
        console.log(e)
    }
}

function readRequest (key, year) {
    try{
        return fs.readFileSync("./requestFiles/searched key "+key+" on "+year+".txt","utf8");
    }catch(e){
        console.log(e)
    }
    return null
}
module.exports = {
    writeRequest,
    readRequest
}