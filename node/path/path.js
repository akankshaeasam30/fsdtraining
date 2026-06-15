const path=require("path");
console.log("base name:",path.basename("C:\\fsdtraining\\node\\path"))
console.log("ext name:",path.extname("C:\\fsdtraining\\node\\path\\path.js"))
console.log("dir name:",path.dirname("C:\\fsdtraining\\node\\path\\path.js"))
console.log("parse:",path.parse("C:\\fsdtraining\\node\\path\\path.js"))
console.log("absolute path:",path.resolve("C:\\fsdtraining\\node\\path\\path.js"))
console.log("join:",path.join("C:","fsdtraining","node","path"))
console.log("dir name:",__dirname)