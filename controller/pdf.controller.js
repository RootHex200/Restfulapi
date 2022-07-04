
const fs=require("fs")
const pdfparser=require("pdf-parse")

const getPdfdata=(req,res)=>{
    const pdffile=fs.readFileSync("day02.pdf")
    pdfparser(pdffile).then((data)=>{
        res.status(200).json({
            message:data.info,
            text:data.text,
            metadata:data.metadata,
            numberofpage:data.numpages
        });
    })
    .catch((e)=>print(e))
    
}


module.exports={getPdfdata}