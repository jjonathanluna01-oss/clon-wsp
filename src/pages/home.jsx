import { useState } from "react";
import Sidebar from "../components/sidebar";
import SplashScreen from "../components/splashscreen";
import logo from "../assets/logoo.png";

function Home() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <SplashScreen onFinish={() => setLoading(false)} />;
    }

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