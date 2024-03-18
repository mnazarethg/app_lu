import React from 'react';
import './UserProfile.css'; // Asegúrate de importar el CSS

const UserProfile = () => {
  return (
    <div className="user-profile">
      <header className="header">
        <nav>
          <button>{"<"}</button>
          <h1>Perfil</h1>
          <div></div> {/* Espacio para mantener el título centrado */}
        </nav>
      </header>
      <main className="main-content">
        <section className="user-info">
          <div className="avatar-placeholder">
            {/* Icono o imagen del usuario */}
          </div>
          <h2>Datos de usuario</h2>
          <form>
            <label>
              Nombre y apellido
              <input type="text" placeholder="Nombre y apellido" />
            </label>
            <label>
              Teléfono
              <input type="tel" placeholder="Teléfono" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Email" />
            </label>
            <label>
              País
              <select>
                {/* Opciones de países */}
              </select>
            </label>
            <button type="submit">Guardar</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        {/* Iconos de navegación */}
      </footer>
    </div>
  );
};

export default UserProfile;