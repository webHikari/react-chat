import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
    const Navigate = useNavigate();
    const [user, setUser] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
        localStorage.setItem("user", user);
        Navigate("/chat");
    };

    return (
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <h2>Вход в чат</h2>
            <label htmlFor="user"></label>
            <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button type="submit">Войти</button>
        </form>
    );
};

export default Home;
