import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [chats] = useState([
        {
            id: "1",
            name: "Lionel Messi",
            avatar: "https://w7.pngwing.com/pngs/652/538/png-transparent-lionel-messi-fc-barcelona-la-liga-spain-national-football-team-football-player-lionel-messi-sports-hair-moustache-thumbnail.png",
        },
        {
            id: 2,
            name: "Diego Maradona",
            avatar:
                "https://w7.pngwing.com/pngs/473/633/png-transparent-diego-maradona-1986-fifa-world-cup-argentina-national-football-team-argentinos-juniors-maradona-by-kusturica-football-head-sports-world-cup-thumbnail.png",
        },
        {
            id: 3,
            name: "Carlos Gómez",
            avatar: "https://i.pravatar.cc/40?img=3",
        },
        {
            id: 4,
            name: "ricardo martinez",
            avatar: "https://i.pravatar.cc/40?img=4",
        },
        {
            id: 5,
            name: "maria lopez",
            avatar: "https://i.pravatar.cc/40?img=5",
        },
        {
            id: 6,
            name: "pedro",
            avatar: "https://i.pravatar.cc/40?img=6",
        },
        {
            id: 7,
            name: "lucina",
            avatar: "https://i.pravatar.cc/40?img=6"
        }
    ]);

    const [messages, setMessages] = useState({
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
    });

    const sendMessage = (chatId, text) => {
        if (text.trim() === "") return;

        const newMessage = {
            text,
            sender: "me",
            time: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => ({
            ...prev,
            [chatId]: [...prev[chatId], newMessage],
        }));

        // respuesta automática
        setTimeout(() => {
            const autoReply = {
                text: "Estoy respondiendo automáticamente 🤖",
                sender: "other",
                time: new Date().toLocaleTimeString(),
            };

            setMessages((prev) => ({
                ...prev,
                [chatId]: [...prev[chatId], autoReply],
            }));
        }, 1000);
    };

    return (
        <ChatContext.Provider value={{ chats, messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}