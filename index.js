const fetch = require("node-fetch");
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url
    // console.log(url)   
    let tableData = "<table border='1'><tr><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>"
    if (url === "/") {
        res.write("<h1>Welcome to the Home Page!</h1> + '<img src=https://i.ibb.co/C85CCV2/pexels-clive-kim-4619986.jpg>'");
        res.end();
     }
     if (url === "/list") {
         fetch("https://swapi.dev/api/people")
             .then((res) => res.json())
             .then((data) => {
                console.log(data);
                console.log(data.results);
                res.write(tableData)
                res.end();  
             });
    else {
        res.end("Page not found");
    }
}
    function createData(data.results) {
        data.forEach(element => {
            tableData += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td></tr>`
        });
        tableData += `</table>`
    }

})server.listen(8090, console.log("Server is listening on port " + 8090));






