// const express = require("express");
// const { Server } = require("socket.io");

// const app = express();
// const server = require("http").createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

// io.on("connection", (socket) => {
//   console.log("Client connected");
//   setInterval(() => {
//     socket.emit("new_ticket", `Ticket ${Math.floor(Math.random() * 100)}`);
//   }, 5000);
// });

// server.listen(5173, () => console.log("Server running on http://localhost:5173"));