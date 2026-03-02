import { Link, useSearchParams } from "react-router-dom";
import { useChat } from "../context/chatcontext";

function Sidebar() {
    const { chats } = useChat();
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    const handleSearch = (e) => {
        const value = e.target.value;
        if (value) {
            setSearchParams({ search: value });
        } else {
            setSearchParams({});
        }
    };

    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="sidebar">
            <h2>Chats</h2>

            <form onSubmit={(e) => e.preventDefault()} className="search-form">
                <input
                    type="text"
                    placeholder="Buscar chat..."
                    value={search}
                    onChange={handleSearch}
                    className="search-input"
                />
            </form>

            {filteredChats.length > 0 ? (
                filteredChats.map((chat) => (
                    <Link
                        key={chat.id}
                        to={`/chat/${chat.id}`}
                        className="chat-item"
                    >
                        <img src={chat.avatar} alt={chat.name} className="avatar" />
                        {chat.name}
                    </Link>
                ))
            ) : (
                <p className="no-results">No se encontraron chats</p>
            )}
        </div>
    );
}

export default Sidebar;