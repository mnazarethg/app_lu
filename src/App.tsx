import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login'; 
import UserProfile from './UserProfile'; 
import WelcomeScreen2 from './WelcomeScreen2'; 
import './App.css';


function WelcomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/WelcomeScreen2');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>back home</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>} />
          <Route path="/WelcomeScreen2" element={<WelcomeScreen2/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
    </Router>
  );
}

export default App;