const fs=require("fs");
console.log("start")
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
console.log("end")