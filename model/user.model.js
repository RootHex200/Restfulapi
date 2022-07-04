

const mongoose=require("mongoose")

const userSChema=mongoose.Schema({

    username:{
        type:String,
    },
    name:{
        type:String
    },
    address:{
        type:String,
    },
    birthdate:{
        type:Date
    },
    email:{
        type:String
    },
    active:{
        type:Boolean
    },
    accounts:{
        type:Array
    },
    tier_and_details:{
        type:Object,
        detilas:[]

    }


});


module.exports=mongoose.model("customers",userSChema)