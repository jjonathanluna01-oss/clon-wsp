import Sidebar from "../components/sidebar";
import logo from "../assets/logoo.png";

function Home() {
    return (
        <div className="app">
            <Sidebar />
            <div className="chat-placeholder">
                <img src={logo} alt="FlowMessageLine" />
                <p>Seleccioná un chat para empezar</p>
            </div>
        </div>
    );
}

export default Home;

