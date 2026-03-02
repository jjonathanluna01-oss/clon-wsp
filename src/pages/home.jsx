import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div className="app">
            <Sidebar />
            <div className="chat-placeholder">
                <h2>Seleccioná un chat</h2>
            </div>
        </div>
    );
}

export default Home;