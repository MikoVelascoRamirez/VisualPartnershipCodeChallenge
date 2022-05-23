const fs = require("fs");

class Reader{
    static readDirectory(path){
        try{
            const rawData = fs.readdirSync(path);            
            return rawData;
        } catch(error){
            return error.code;
        }
    }
}

module.exports = Reader;