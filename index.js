//import http 
const http = require("http")

//create server with http
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

// initialize port
const PORT = 4000;

//listen to server
server.listen(PORT, ()=> console.log("server is up and running on port ${PORT}"))
