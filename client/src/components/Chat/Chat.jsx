import { useEffect, useState } from "react";
import Body from "./components/Body";
import MessageBlock from "./components/MessageBlock";
import Sidebar from "./components/Sidebar";

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on("response", (data) => {
            setMessages([...messages, data]);
        });
    }, [socket, messages]);

    return (
        <div className="chat">
            <Sidebar />
            <main className="main">
                <Body messages={messages} />
                <MessageBlock socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage;
