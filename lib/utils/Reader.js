const fs = require("fs");

class Reader{
    static readDirectory(path){
        try{
            const files = fs.readdirSync(path);            
            return files;
        } catch(error){
            return error.code;
        }
    }

    static readSourceData(file){
        try{
            const rawData = fs.readFileSync(file);
            return JSON.parse(rawData);
        }catch(error){
            return error.code;
        }
    }
}

module.exports = Reader;