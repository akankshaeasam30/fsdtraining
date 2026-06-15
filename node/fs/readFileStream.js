const fs=require("node:fs")
let rs=fs.createReadStream("new.txt");
rs.on("data",(chunk)=>{
    console.log(typeof chunk)
})
rs.on("error",()=>{
    console.log("Error")
})