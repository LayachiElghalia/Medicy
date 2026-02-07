import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css'; // On utilise le CSS du dashboard pour les icônes

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour savoir si un lien est actif
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="bottom-navbar">
      <div className={`nav-item ${isActive('/dashboard')}`} onClick={() => navigate('/dashboard')}>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Accueil</span>
      </div>
      <div className={`nav-item ${isActive('/stats')}`} onClick={() => navigate('/stats')}>
        <span className="nav-icon">📊</span>
        <span className="nav-label">Stats</span>
      </div>
      <div className={`nav-item ${isActive('/profile')}`} onClick={() => navigate('/profile')}>
        <span className="nav-icon">👤</span>
        <span className="nav-label">Profil</span>
      </div>
    </nav>
  );
}

export default Navbar;