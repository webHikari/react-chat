const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
    cors: {
        origin: `http://localhost:5173`,
    },
});

app.use(cors);

app.get("/api", (req, res) => {
    res.json({
        message: "hello",
    });
});

socketIO.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);
    });
});

http.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
