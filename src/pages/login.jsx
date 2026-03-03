import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoo.png";

function Login() {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (nombre.trim().length < 2) {
            newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
        }
        if (!/^\d{7,15}$/.test(telefono.replace(/\s/g, ""))) {
            newErrors.telefono = "Ingresá un número de teléfono válido";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        sessionStorage.setItem("user", JSON.stringify({ nombre, telefono }));
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="login-card">

                {/* Logo */}
                <div className="login-logo-wrapper">
               <img src={logo} alt="FlowMessageLine" className="login-logo-img" />
                    <p className="login-subtitle">Ingresá tus datos para continuar</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="login-form" noValidate>
                    <div className="login-field-group">
                        <label className="login-label">Tu nombre</label>
                        <input
                            type="text"
                            placeholder="Ej: Juan López"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                                if (errors.nombre) setErrors((prev) => ({ ...prev, nombre: null }));
                            }}
                            className={`login-input ${errors.nombre ? "login-input--error" : ""}`}
                        />
                        {errors.nombre && <span className="login-error">{errors.nombre}</span>}
                    </div>

                    <div className="login-field-group">
                        <label className="login-label">Número de teléfono</label>
                        <div className="login-phone-wrapper">
                            <span className="login-phone-prefix">+54</span>
                            <input
                                type="tel"
                                placeholder="11 2345 6789"
                                value={telefono}
                                onChange={(e) => {
                                    setTelefono(e.target.value);
                                    if (errors.telefono) setErrors((prev) => ({ ...prev, telefono: null }));
                                }}
                                className={`login-input ${errors.telefono ? "login-input--error" : ""}`}
                            />
                        </div>
                        {errors.telefono && <span className="login-error">{errors.telefono}</span>}
                    </div>

                    <button type="submit" className="login-button">
                        Continuar
                    </button>
                </form>

                <p className="login-terms">
                    Al continuar, aceptás nuestros{" "}
                    <span className="login-link">Términos del servicio</span> y{" "}
                    <span className="login-link">Política de privacidad</span>
                </p>
            </div>
        </div>
    );
}

export default Login;