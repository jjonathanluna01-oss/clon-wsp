import { useParams } from "react-router-dom";
import { useChat } from "../context/chatcontext";
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
        <div className="app app--chat">
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
                    {/* Botón + */}
                    <button type="button" className="input-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 11H13V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>
                        </svg>
                    </button>

                    {/* Botón emoji */}
                    <button type="button" className="input-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                        </svg>
                    </button>

                    {/* Input */}
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribe un mensaje"
                    />

                    {/* Botón micrófono o enviar */}
                    {text.trim() ? (
                        <button type="submit" className="input-btn input-btn--send">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    ) : (
                        <button type="button" className="input-btn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                            </svg>
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ChatPage;