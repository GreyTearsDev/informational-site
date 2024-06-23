const http = require("http")
const express = require("express")
const path = require("path")
const app = express()
const port = 3000;
const publicDirectory = "public"

app.use(express.static(`./${publicDirectory}`));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, publicDirectory, "index.html"))
})

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, publicDirectory, "about.html"))
})

app.get("/contact-me", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, publicDirectory, "contact-me.html"))
})

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, publicDirectory, "404.html"))
})

app.listen(port, () => {
  console.log(`The server as been started on port: ${port}`)
})

