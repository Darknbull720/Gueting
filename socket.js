const socket = require("socket.io-client")("http://server.gueting.replit.co/")


//Login na Rede
socket.on("login-"+process.env.token, () => {
  console.log("Conectado ao servidor.")
})


module.exports = socket