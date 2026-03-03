import { Link, useSearchParams, useParams } from "react-router-dom";
import { useChat } from "../context/chatcontext";

function Sidebar() {
    const { chats } = useChat();
    const [searchParams, setSearchParams] = useSearchParams();
    const { id: activeId } = useParams();
    const search = searchParams.get("search") || "";

    // Leer usuario del sessionStorage
    const userRaw = sessionStorage.getItem("user");
    const user = userRaw ? JSON.parse(userRaw) : { nombre: "Usuario", telefono: "" };

    // Iniciales del nombre para el avatar
    const initials = user.nombre
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

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
            {/* Header del usuario */}
            <div className="sidebar-user">
                <div className="sidebar-user-avatar">{initials}</div>
                <div className="sidebar-user-info">
                    <span className="sidebar-user-name">{user.nombre}</span>
                    <span className="sidebar-user-phone">{user.telefono}</span>
                </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="search-form">
                <input
                    type="text"
                    placeholder="Buscar o iniciar un nuevo chat"
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
                        className={`chat-item ${activeId === chat.id ? "active" : ""}`}
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