import React from "react";
import "./RegisterU.css";

const RegisterU = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registro</h2>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña"/>
        <input type="password" placeholder="Confirmar Contraseña"/>
        <select>
          <option>Selecciona un rol</option>
          <option>Usuario</option>
          <option>Administrador</option>    
        </select>
        <button className="btnR">Registrarse</button>
        <button className="btnIS">Ya tengo cuenta</button>
      </div>
    </div>
  );
};

export default RegisterU;
