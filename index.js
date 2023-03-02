import http, { request } from "http"

const server = http.createServer((req, res) =>{
    const url = req.url
    if(url === "/"){
        res.write("Welcome Home!")
        res.end()
    }

    if(url === "/message"){
        res.write("Welcome to my message page!")
        res.end()
    }

}).listen(8000,console.log("Server is listening on port 8000"))




    








