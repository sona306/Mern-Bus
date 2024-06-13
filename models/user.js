const mongoose = require("mongoose")

const schema = mongoose.Schema(

    {
        "name":{type:String,require:true},
        "emailid":{type:String,require:true},
        "phone":{type:String,require:true},
        "gender":{type:String,require:true},
        "password":{type:String,require:true},
        "confirm":{type:String,require:true}
    }
)

let ksrtcmodel = mongoose.model("users",schema)
module.exports={ksrtcmodel}
