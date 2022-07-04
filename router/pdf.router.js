


const pdfrouter=require("express").Router();
const {getPdfdata}=require("../controller/pdf.controller")

pdfrouter.post("/",getPdfdata)

module.exports=pdfrouter;