import { useState } from "react";

const MessageBlock = ({ socket }) => {
    const [message, setMessage] = useState("");

    const handleMessageSend = (e) => {
        e.preventDefault();
        if (message.length === 0) return;

        console.log({
            user: localStorage.getItem("user"),
            message,
        });
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
