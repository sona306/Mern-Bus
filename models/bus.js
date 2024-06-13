const mongoose = require("mongoose")

const schema = mongoose.Schema(

    {
        "busname":{type:String,require:true},
        "root":{type:String,require:true},
        "busnumber":{type:String,require:true},
        "driver":{type:String,require:true}
    }
)

let busaddmodel = mongoose.model("buses",schema)
module.exports={busaddmodel}
