const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader("Content-Type", "text/html")
  res.write("<h1>Testing</h1>")
  res.end()
})

server.listen(3000, "localhost", (req, res) => {
  console.log("The server as been started...")
})
