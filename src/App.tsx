import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Login from './Login'; 
import UserProfile from './UserProfile'; 
import WelcomeScreen2 from './WelcomeScreen2'; 
import './App.css';
import Start from './Start'; 
import MyPosts from './MyPosts'; 
import CreatePublication from './CreatePublication'; 

export const StatusBar = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isUserProfile = location.pathname === '/user-profile';

  return (
    <div className="status-bar" style={{ width: '100%' }}>
      {isUserProfile && (
        <svg onClick={() => window.history.back()} xmlns="http://www.w3.org/2000/svg" width="75" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', verticalAlign: 'bottom' }}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      )}
      {children}
    </div>
  );
};

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
        <StatusBar/>
        <Routes>
          <Route path="/" element={<WelcomeScreen/>} />
          <Route path="/WelcomeScreen2" element={<WelcomeScreen2/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/MyPosts" element={<MyPosts />} />
          <Route path="/CreatePublication" element={<CreatePublication />} />
        </Routes>
      </Router>
  );
}

export default App;