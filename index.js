//Veriaveis//
const express = require("express");
const app = express();
const socket = require("./socket");
const ejs = require("ejs");
//--------//

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async(req, res) => {
  res.render("index")
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
