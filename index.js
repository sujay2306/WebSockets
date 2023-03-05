const http = require("http")
const WebSocketServer = require("websocket").server
let connection = null

//spin up a http server
const httpserver = http.createServer((req, res) => {
    console.log("we have received a request");
})

//create websocket
const websocket = new WebSocketServer({
    httpServer:httpserver //we are sending out http server listening on 8080
})
websocket.on("request", request=>{
    //accept the request of client
   connection = request.accept(null, request.origin)
   connection.on("onopen", () => console.log("Opened!!!"))
   connection.on("onclose"), () => console.log("Closed!!!")
   connection.on("onmessage", message => {
            console.log(`Rrecived message ${message}`);
   })

})

httpserver.listen(80, () => {
    console.log("My server is listening on port 8080");
})

