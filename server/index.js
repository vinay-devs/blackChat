const express = require("express");
const socketio = require("socket.io");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const io = socketio(server, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (messages) => {
    console.log("messages", messages);
    const sendMessage = messages.map((message) => ({
      ...message,
      sent: false,
    }));
    socket.broadcast.emit("received_message", sendMessage);
  });
});
