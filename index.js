import http, { request } from "http"

const server = http.createServer((req, res) =>{
    const url = req.url 
    if(url === "/"){
        res.write("Welcome to the Home Page!")
        res.end()
    }
    if(url === "/message") {
        res.write("Welcome to the Message Page!")
        res.end()
    }

}).listen(8000,console.log("Server is listening on port 8000"))
