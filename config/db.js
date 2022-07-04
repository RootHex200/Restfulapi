

const config=require("./config")
const mongoose=require("mongoose");
const dburl=config.db.url;

mongoose.connect(dburl).then(()=>console.log("data is connect")).catch((e)=>console.log(e))

