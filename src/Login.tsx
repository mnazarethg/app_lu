import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div >
            <h1 style={{ textAlign: "center" }}>Inicio de sesión</h1>
        </div>
        <form className="app-structure">
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" required />
        </div>
        <div className="forgot-password">
            <a href="#">Olvidé mi contraseña</a>
        </div>
        <br></br>
        <div className="container">
            <Link to="/user-profile" className="green-button">Iniciar sesión</Link>
        </div>
        <br></br>
        <div>
            <span>¿Aún no eres parte de la comunidad? Regístrate con tu email</span>
            {/* Utiliza Link para navegar al perfil */}
        </div>
        <br></br>
        <div className="container">
            <Link to="/user-profile" className="green-button">Regístrate</Link>
        </div>
        <span>O</span>
        <div className="social-login">
        <button className="google">Inicia sesión con Google</button>
        <button className="apple">Inicia sesión con Apple</button>
        <button className="facebook">Inicia sesión con Facebook</button>
        </div>
        </form>
        </>
    )
};


export default Login;