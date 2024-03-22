import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type CountryOption = {
  name: string;
  code: string;
};

const UserProfile = () => {
  const statusBarContent = <div>UserProfile</div>;
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(response => response.json())
      .then(data => {
        const countryOptions: CountryOption[] = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryOptions);
      });
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      
      reader.readAsDataURL(file);
    }
  }; // This closing brace was missing

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Perfil</h1>
      </div>
      <form className="app-structure">
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
        <div>
          <span style={{ fontSize: '17px', fontWeight: 'bold' }}>Datos de usuario</span>
        </div>
        <br></br>
        <div className="input-group">
          <label htmlFor="name">Nombre y apellido</label>
          <input type="name" id="name" placeholder="Nombre y apellido" required />
        </div>
        <div className="input-group">
          <label>Teléfono</label>
          <input type="tel" placeholder="Teléfono" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group" >
          <select>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <Link to="/Start" className="green-button">Guardar</Link>
        </div>
      </form>
    </>
  );
};

export default UserProfile;
