const fs = require('fs');
function writeRequest (info, key, year) {
    info = JSON.stringify(info)
    try{
        fs.writeFileSync("./requestFiles/searched key "+key+" on "+year+".txt",info,"utf8");
    }catch(e){
        console.log(e)
    }
}
module.exports = {
    writeRequest
}