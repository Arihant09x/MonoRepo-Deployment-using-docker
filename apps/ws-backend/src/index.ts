import { WebSocketServer } from "ws";
import { prismaclient } from "@repo/database/db";

const ws = new WebSocketServer({ port: 8080 });
console.log("Server is running on port 8080");
ws.on("connection", (socket) => {
  console.log("New connection");
  socket.on("message", async (message) => {
    await prismaclient.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    console.log("Received message:", message);
    socket.send("Hello, Server!");
  });
});
