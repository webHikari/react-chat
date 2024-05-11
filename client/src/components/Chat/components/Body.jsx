import { useNavigate } from "react-router-dom";

const Body = () => {
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
                <div className="chats sender">
                    <div className="message">
                        <p>You</p>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="chats receive">
                    <div className="message">
                        <p>You</p>
                        <p>Hello</p>
                    </div>
                </div>

                <div className="chats receive">
                    <div className="message">
                        <p>You</p>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="chats sender">
                    <div className="message">
                        <p>You</p>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="chats sender">
                    <div className="message">
                        <p>You</p>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
