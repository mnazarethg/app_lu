import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile'; // Importa el nuevo componente
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <>
          <h1>Inicio de sesión</h1>
          <form className="login-form">
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
            <button type="submit">Iniciar sesión</button>
          </form>
          <div className="social-login">
            <button className="google">Inicia sesión con Google</button>
            <button className="apple">Inicia sesión con Apple</button>
            <button className="facebook">Inicia sesión con Facebook</button>
          </div>
          <div className="signup">
            <span>¿Aún no eres parte de la comunidad? Regístrate con tu email</span>
             {/* Utiliza Link para navegar al perfil */}
            <Link to="/user-profile"><button>Regístrate</button></Link>
          </div>
          </>
            } />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;