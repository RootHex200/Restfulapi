
const config=require("../config/config")



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = config.db.url;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then((e)=>console.log("conected")).catch((e)=>console.log("not connected"))
const collection1 = client.db("sample_analytics").collection("customers");

const collection2 = client.db("sample_analytics").collection("transactions")




const getCostomer =async (req, res) => {
    try{
        const data=await collection1.find({}).toArray();
        res.status(200).json(data);
    }catch{
        res.status(404).json({message:"no data found!!"})
    }
}


const gettransactions=async(req,res)=>{
    console.log("rquest here")
    try{
        const data=await collection2.find({}).toArray();
        res.status(200).json(data);
    }catch {
        res.status(404).json({message:"data is not found"})
    }
}

module.exports={getCostomer,gettransactions}