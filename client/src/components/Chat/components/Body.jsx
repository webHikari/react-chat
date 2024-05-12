import { useNavigate } from "react-router-dom";

const Body = ({ messages }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>
            <header className="header">
                <button className="btn" onClick={handleLogout}>
                    Leave chat
                </button>
            </header>
            <div className="container">
                {messages.map((element) => {
                    const messageClass =
                        element.name === localStorage.getItem("user")
                            ? "chats sender"
                            : "chats receive";
                    return (
                        <div className={messageClass} key={element.id}>
                            <div className="message">
                                <p>
                                    {element.name ===
                                    localStorage.getItem("user")
                                        ? "You"
                                        : element.name}
                                </p>
                                <p>{element.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
