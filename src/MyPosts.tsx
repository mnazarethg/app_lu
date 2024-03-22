import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MyPosts() {
    return (
        <div style={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '207px', height: '270.41px'}} />
            <br></br>
            <h3>back home</h3>
            <p style={{ textAlign: 'center' }}>¿Perdiste o encontraste una mascota?
                <br></br>
                Publicala asi entre todos logramos
                <br></br>
                que vuelva a su hogar.
                <br></br>
            </p>
            <br></br>
            <Link to="/CreatePublication" className="green-button-large">Crear Publicacion</Link>
        </div>
    );
  }
export default MyPosts;
