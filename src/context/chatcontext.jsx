import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const autoReplies = {
    "1": [
        "¡Hola! Acá Messi. Estoy entrenando para el próximo partido ⚽",
        "La pelota siempre al piso, como me enseñó Guardiola 🎯",
        "Gracias por el mensaje! Vamos Argentina! 🇦🇷",
        "Estoy con la familia, pero te respondo enseguida 😊",
        "El fútbol es mi vida, qué querés que te diga 🐐",
    ],
    "2": [
        "¡Pibe! ¿Cómo andás? La mano de Dios siempre presente ✋",
        "El fútbol hay que jugarlo con el corazón, no con la cabeza 💙",
        "Napoli, Boca, Argentina... amor eterno ❤️",
        "¡Soy el mejor que hubo, hay y habrá! 🌟",
        "Acordate: el mejor de todos los tiempos soy yo 😄",
    ],
    "3": [
        "¡Hola! Todo bien por acá 😊",
        "Dale, nos vemos pronto!",
        "Jaja sí, tenés razón 👍",
        "Qué bueno escucharte!",
        "Te mando un saludo grande 🤗",
    ],
    "4": [
        "Hola! Cómo te va? 👋",
        "Sí, claro! Cuando quieras hablamos",
        "Genial, gracias por avisar!",
        "Ok, entendido 👌",
        "Nos ponemos de acuerdo después!",
    ],
    "5": [
        "¡Hola! ¿Todo bien? 💕",
        "Ay qué lindo que me escribas! 😊",
        "Sí, re de acuerdo contigo!",
        "Jaja me hiciste reír 😂",
        "Buenísimo, me alegra mucho!",
    ],
    "6": [
        "Eyyy qué hacés! 🤙",
        "Todo tranqui por acá",
        "Dale, re copado",
        "Jaja sí bro 😄",
        "Ok ok, entendido!",
    ],
    "7": [
        "Hola! 🌸 ¿Cómo estás?",
        "Qué bueno saber de vos!",
        "Sí, totalmente de acuerdo ✨",
        "Jaja me alegró el día 😊",
        "Un abrazo grande! 🤗",
    ],
};

export function ChatProvider({ children }) {
    const [chats] = useState([
        {
            id: "1",
            name: "Lionel Messi",
            avatar: "https://w7.pngwing.com/pngs/652/538/png-transparent-lionel-messi-fc-barcelona-la-liga-spain-national-football-team-football-player-lionel-messi-sports-hair-moustache-thumbnail.png",
        },
        {
            id: "2",
            name: "Diego Maradona",
            avatar: "https://w7.pngwing.com/pngs/473/633/png-transparent-diego-maradona-1986-fifa-world-cup-argentina-national-football-team-argentinos-juniors-maradona-by-kusturica-football-head-sports-world-cup-thumbnail.png",
        },
        {
            id: "3",
            name: "Carlos Gómez",
            avatar: "https://i.pravatar.cc/40?img=3",
        },
        {
            id: "4",
            name: "Ricardo Martinez",
            avatar: "https://i.pravatar.cc/40?img=4",
        },
        {
            id: "5",
            name: "Maria Lopez",
            avatar: "https://i.pravatar.cc/40?img=5",
        },
        {
            id: "6",
            name: "Pedro",
            avatar: "https://i.pravatar.cc/40?img=6",
        },
        {
            id: "7",
            name: "Lucina",
            avatar: "https://i.pravatar.cc/40?img=7",
        },
    ]);

    const [messages, setMessages] = useState(
        Object.fromEntries(["1", "2", "3", "4", "5", "6", "7"].map((id) => [id, []]))
    );

    const [replyIndex, setReplyIndex] = useState(
        Object.fromEntries(["1", "2", "3", "4", "5", "6", "7"].map((id) => [id, 0]))
    );

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

        // Respuesta personalizada
        setTimeout(() => {
            const replies = autoReplies[chatId];
            const index = replyIndex[chatId] % replies.length;
            const reply = replies[index];

            const autoReply = {
                text: reply,
                sender: "other",
                time: new Date().toLocaleTimeString(),
            };

            setMessages((prev) => ({
                ...prev,
                [chatId]: [...prev[chatId], autoReply],
            }));

            setReplyIndex((prev) => ({
                ...prev,
                [chatId]: prev[chatId] + 1,
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