const fs = require("fs")

const sendHTMLFile = (path, response) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end("Internal Server Error");
      console.log(err);
      return;
    }
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(data)
  })
}
module.exports = sendHTMLFile
