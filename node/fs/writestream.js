const fs=require("fs");
let ws=fs.createWriteStream("new.txt")
let rs=fs.createReadStream("demo.txt","utf-8")
rs.on("data",(chunk)=>{
    console.log(chunk)
    ws.write(chunk)
    console.log("data written successfully by streams")
})
rs.on("error",()=>{
    console.log("Error")
})