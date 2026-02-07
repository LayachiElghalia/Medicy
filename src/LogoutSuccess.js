import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // On utilise le même fichier CSS pour garder le style cohérent

function LogoutSuccess() {
  const navigate = useNavigate();

  return (
    <div className="auth-page" style={{justifyContent: 'center'}}>
      {/* Titre "deconecter" en haut à gauche, hors de la carte */}
      <div style={{position: 'absolute', top: '20px', left: '20px', color: '#ccc', fontWeight:'bold'}}>
        deconecter
      </div>

      <div className="auth-card center-text" style={{padding: '50px 30px', maxWidth: '450px'}}>
        
        {/* Icône Cercle Vert avec Coche Blanche */}
        <div className="success-icon-circle">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Titre Principal */}
        <h2 style={{fontSize: '1.4rem', margin: '20px 0', color: 'black'}}>
          Vous vous êtes déconnecté<br/> avec succès
        </h2>
        
        {/* Texte secondaire */}
        <p style={{color: '#666', marginBottom: '40px', fontSize: '0.95rem', lineHeight: '1.5'}}>
          Merci d'avoir utilisé nos services<br/>
          Nous espérons vous revoir bientôt.<br/>
          presque!
        </p>

        {/* Bouton Sarcelle */}
        <button 
          className="auth-btn btn-teal" 
          onClick={() => navigate('/login')}
        >
          Connectez-vous à nouveau
        </button>

      </div>
    </div>
  );
}

export default LogoutSuccess;