const fs=require("fs")
let rs=fs.createReadStream("test.txt")
let ws=fs.createWriteStream("new2.txt")
rs.pipe(ws)