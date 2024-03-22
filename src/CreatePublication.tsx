import selectedImage from './UserProfile'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CreatePublication() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const reader = new FileReader();
          
          reader.onloadend = () => {
            setSelectedImage(reader.result as string);
          };
          
          reader.readAsDataURL(file);
        }
    };
    return (
        <>
        <form className="app-structure">
       
        <div>
          <span style={{ fontSize: '17px', fontWeight: 'bold' }}>Create Publication</span>
        </div>
        <br></br>
        <div className="avatar-placeholder">
            {selectedImage ? (
        <img src={selectedImage.toString()} alt="Avatar" />
      ) : null}
          <label htmlFor="imageInput">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19V5a2 2 0 0 0-2-2h-2.38a1 1 0 0 1-.92-.62l-.54-1.64A2 2 0 0 0 15.38 0H8.62a2 2 0 0 0-1.78 1.24l-.54 1.64a1 1 0 0 1-.92.62H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
          </label>
          <input id="imageInput" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
        </div>
        <br></br>
        <div className="input-group-large">
          <input type="text" id="Description" placeholder="Describe your pet" required />
        </div>
        <br></br>
        <div className="input-group">
          <input type="age" id="age" placeholder="age" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Size" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Raza" />
        </div>
        <div className="input-group">
        <select id="Sex" required>
            <option value="Sexo" disabled selected>Sexo</option>
            <option value="Hembra">Hembra</option>
            <option value="Macho">Macho</option>
            <option value="No se">No se</option>
        </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <Link to="" className="green-button-large">Publicar</Link>
        </div>
        </form>
        </>
    );
  }

export default CreatePublication;