import http, { request } from "http"
import fetch from "node-fetch"
import { createDeflateRaw } from "zlib"

const server = http.createServer((req, res) =>{
    const url = req.url 
    let tableData = "<table border="1"><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>"
    if(url === "/"){
        res.write("Welcome to the Home Page!")
        res.end()
    }
    if(url === "/list") {
        fetch("https://swapi.dev/api/people")
        .then(res => res.json())
        .then(data => {
            createData(data)
            res.write("Welcome to My List Page")
            res.end()
        })
    }
    else {
            res.end("Page not found");
        }
    function createData(data) {
        data.forEach(element => {
            tableData+="<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td></tr>"
        });
        tableData+="</table>"
    }

}).listen(8090, console.log("Server is listening on port 8090"))


