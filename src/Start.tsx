import { Link } from 'react-router-dom';

function Start() {
    return (
        <div className="app-structure">
            <br></br>
            <br></br>
            <div >
                <span style={{ fontSize: '17px', fontWeight: 'bold' }}>¿Perdiste a tu mascota?</span>
                <br></br>
                <br></br>
                <Link to="/MyPosts" className='green-button-large'>Publica a tu mascota perdida</Link>
            </div>
            <br></br>
            <br></br>
            <div >
                <span style={{ fontSize: '17px', fontWeight: 'bold' }}>¿Encontraste una mascota?</span>
                <br></br>
                <br></br>
                <Link to="/MyPosts" className='green-button-large'>Publica la mascota encontrada</Link>
            </div>
            <br></br>
            <br></br>
            <div>
                <span style={{ fontSize: '17px', fontWeight: 'bold' }}>¿Quieres ser parte de la <br></br> comunidad para ayudar?</span>
                <br></br>
                <br></br>
                <Link to="" className='green-button-large'>Ingresa como visitante</Link>
            </div>
        </div>
    );
  }
export default Start;