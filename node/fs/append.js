// const fs=require("fs")
// let data="\nthis data is appended after 1 line"
// fs.appendFileSync("demo.txt",data);
//async
const fs=require("fs")
let data="\nsecond line"
fs.appendFile("test.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("data appended successfully")
})