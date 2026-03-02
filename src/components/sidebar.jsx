import { Link } from "react-router-dom";
import { useChat } from "../context/chatcontext";

function Sidebar() {
    const { chats } = useChat();

    return (
        <div className="sidebar">
            <h2>Chats</h2>

            {chats.map((chat) => (
                <Link
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className="chat-item"
                >
                    {chat.name}
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;