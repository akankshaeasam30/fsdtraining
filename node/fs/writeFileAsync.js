const fs=require("fs");
let data="hello this is node.js"
fs.writeFile("test.txt",data, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("data written successfully using async..")
})