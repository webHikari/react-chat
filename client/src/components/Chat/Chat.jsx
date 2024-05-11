import Body from "./components/Body";
import MessageBlock from "./components/MessageBlock";
import Sidebar from "./components/Sidebar";

const ChatPage = ({ socket }) => {
    return (
        <div className="chat">
            <Sidebar />
            <main className="main">
                <Body />
                <MessageBlock socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage;
