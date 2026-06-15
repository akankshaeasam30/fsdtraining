const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("This is http module..Welcome")
    }
    else if(req.url=="/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<h1>This is about page</h1>")
    }
    else if(req.url==='/contact'){
        fs.readFile("contact.html",(err,data)=>{
            if(err){
                res.writeHead(404)
                res.end("Error")
                return
            }
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        })
    }
    else if(req.url==="/home"){
        res.writeHead(200,{"Content-Type":"text/html"})
        let rs=fs.createReadStream("home.html")
        rs.pipe(res)
    }
    else if(req.url==="/json"){
        res.writeHead(200,{"Content-Type":"application/JSON"})
        res.end(JSON.stringify({
            name:"akanksha",
            bracnch:"cse"
        }))
    }
})
server.listen(5000,()=>{
    console.log("Server running at the port 3000")
})
