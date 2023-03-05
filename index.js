const http = require("http")
//spin up a http server
const httpserver = http.createServer((req, res) => {
    console.log("we have received a request");
})

httpserver.listen(80, ()=>{
    console.log("My server is listening on port 8080");
})

