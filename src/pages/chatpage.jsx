import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function ChatPage() {
    const { id } = useParams();
    const { chats, messages, sendMessage } = useChat();
    const [text, setText] = useState("");

    const activeChat = chats.find((chat) => String(chat.id) === id);

    const handleSend = (e) => {
        e.preventDefault();
        sendMessage(id, text);
        setText("");
    };

    return (
        <div className="app">
            <Sidebar />

            <div className="chat-container">
                <div className="header">
                    <div className="header-content">
                        <img
                            src={activeChat?.avatar}
                            alt="avatar"
                            className="avatar"
                        />
                        <div>
                            <h3>{activeChat?.name}</h3>
                            <span className="status">En línea</span>
                        </div>
                    </div>
                </div>

                <div className="messages">
                    {messages[id]?.map((msg, index) => (
                        <div
                            key={index}
                            className={
                                msg.sender === "me"
                                    ? "message message-me"
                                    : "message message-other"
                            }
                        >
                            <p>{msg.text}</p>
                            <span>{msg.time}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSend} className="input-container">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribí un mensaje..."
                    />
                </form>
            </div>
        </div>
    );
}

export default ChatPage;