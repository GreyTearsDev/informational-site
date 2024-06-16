const http = require("http")
const sendHTMLFile = require("../util/getFile")

let path; 

const setPath = (url) => {
  switch (url) {
    case "/index.html":
      path = "index.html";
      break;
    case "/about.html":
      path = "about.html";
      break;
    case "/contact-me.html":
      path = "contact-me.html";
      break;
    default:
      path = "404.html";
      break;
  }
}


const server = http.createServer((req, res) => {
  setPath(req.url)
  sendHTMLFile(path, res)
})

server.listen(8000, "localhost", (req, res) => {
  console.log("The server as been started...")
})

