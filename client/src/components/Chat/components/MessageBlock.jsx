import { useState } from "react";

const MessageBlock = ({ socket }) => {
    const [message, setMessage] = useState("");

    const handleMessageSend = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem("user")) {
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("user"),
                id: `${socket.id}-${Math.random}`,
                socketID: socket.id,
            });
        }

        setMessage("");
    };

    return (
        <form className="message-block" onSubmit={handleMessageSend}>
            <input
                type="text"
                className="user-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageBlock;
