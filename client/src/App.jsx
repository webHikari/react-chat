import { Routes, Route } from "react-router-dom";

// pages
import Home from "./components/Home/Home";
import ChatPage from "./components/Chat/Chat";

import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home socket={socket}/>} />
            <Route path="/chat" element={<ChatPage socket={socket}/>} />
        </Routes>
    );
}

export default App;
