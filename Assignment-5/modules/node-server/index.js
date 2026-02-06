const http = require('http')
const path = require('path')
const fs = require('fs')

let server = http.createServer((req, res)=>{
    let url = req.url
    console.log(url)
    // res.write("<h1>Hello Node Server</h1>")
    // res.end()
    let filePath = "";
    if(url == "/"){
        // res.write("<h1>Home Page</h1>")
        // res.end()
        filePath = path.join(__dirname, "public", "index.html")
    } else if(url == "/about") {
        filePath = path.join(__dirname, "public", "about.html")
        // res.write("<h1>About Page</h1>")
        // res.end()
    } else {
        res.write("<h1>404: Page not found</h1>")
        res.end()
    }

    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            res.write("Error")
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(5000, ()=>{
    console.log("Server Started")
})