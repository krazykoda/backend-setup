const http = require("http");

const port = process.env.PORT || 5000;

//Create Server
http.createServer((req, res) => {
    const url = req.url;

    const handler = (status, data) => {
        res.writeHead(status, {"content-type": "text/html"})
        res.write(data)
        res.end()
    };

    //Create routes
    if(url === "/") return handler(200, "<h1>Welcome to my first Backend Server</h1>");
    if(url === "/login") return handler(200, "<h1>Login Page</h1>");
    if(url === "/register") return handler(200, "<h1>Register Page</h1>");
    if(url === "/contact") return handler(200, "<h1>No Contact List </h1>");
    
    //404 not found
    handler(404, "<h1>Page Not Found</h1>")

}).listen(port, () => console.log("Server running on port " + port));