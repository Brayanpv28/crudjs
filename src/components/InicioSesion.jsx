import React from "react";
import "./InicioU.css";

const Iniciosesion = () => {
    return (
        <div className="inicio-container">
            <div className="inicio-box">
                <h2>Iniciar sesion</h2>
                <input type="text" placeholder="Correo" />
                <input type="text" placeholder="Contraseña" />
                <button className="btnIniciar">Iniciar Sesion</button>
                <button className="btnRegister">Registrarme</button>
            </div>
        </div>
    );
};

export default Iniciosesion;