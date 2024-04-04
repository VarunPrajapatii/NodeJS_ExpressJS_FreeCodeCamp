const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to the Homepage");
    }
    if(req.url === "/about") {
        res.end("Welcome to the about page")
    }
    res.end( `
        <h1>OOPS!</h1>
        <p>We cant seem to find the page youre looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000);