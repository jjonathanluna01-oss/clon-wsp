import { useEffect, useState } from "react";
import logo from "../assets/logoo.png";

function SplashScreen({ onFinish }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000;
        const interval = 30;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onFinish, 200);
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onFinish]);

    return (
        <div className="splash-container">
            <div className="splash-content">
                <img src={logo} alt="FlowMessageLine" className="splash-logo" />
                <div className="splash-bar-wrapper">
                    <div
                        className="splash-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="splash-text">Cargando...</p>
            </div>
        </div>
    );
}

export default splashscreen;