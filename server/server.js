const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

let app = express();
let server = http.createServer(app);
let io = socketio(server);

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("A user just connected");

  socket.on("disconnect", () => {
    console.log("A user just disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running at port 3000`);
});
