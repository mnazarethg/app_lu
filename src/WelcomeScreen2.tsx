import { Link } from 'react-router-dom';

function WelcomeScreen2() {
    return (
        <div style={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '207px', height: '270.41px'}} />
            <h3>back home</h3>
            <p>Que Ninguna Mascota Falte De Su Hogar</p>
            <br></br>
            <Link to="/Login"><button className="green-button">Ingresar</button></Link>
        </div>
    );
  }
export default WelcomeScreen2;