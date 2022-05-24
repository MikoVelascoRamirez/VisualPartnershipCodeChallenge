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
            const rawData = fs.readFileSync(file),
                jsonVisualPartners = JSON.parse(rawData);

            if(jsonVisualPartners.length === 0) throw new Error("EMPTY ARRAY");

            return jsonVisualPartners;
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = Reader;