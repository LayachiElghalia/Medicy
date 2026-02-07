import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // On réutilise le style de base (fond, carte centrée)

function LogoutConfirmation() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Ici, on pourrait nettoyer le stockage local (ex: localStorage.clear())
    // Puis on redirige vers la page de connexion
    navigate('/login');
  };

  const handleCancel = () => {
    // Si on annule, on retourne à la page précédente (ou Dashboard)
    navigate(-1); 
  };

  return (
    <div className="auth-page">
      {/* Petit texte en haut à gauche comme sur l'image */}
      <div style={{width: '90%', maxWidth: '400px', marginBottom: '10px', color: '#ccc', fontWeight:'bold'}}>
        se deconnecter
      </div>

      <div className="auth-card center-text" style={{padding: '40px'}}>
        
        {/* Icône Porte de sortie */}
        <div style={{marginBottom: '20px'}}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </div>

        <h2 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Se déconnecter</h2>
        
        <p style={{color: '#666', marginBottom: '30px', fontSize: '0.95rem'}}>
          Êtes-vous sûr de vouloir <br/> vous déconnecter ?
        </p>

        {/* Bouton ROUGE : Confirmer */}
        <button 
          className="auth-btn" 
          onClick={handleConfirm}
          style={{backgroundColor: '#D32F2F', color: 'white', marginBottom: '15px', borderRadius: '25px'}}
        >
          Confirmer la déconnexion
        </button>

        {/* Bouton GRIS : Annuler */}
        <button 
          className="auth-btn" 
          onClick={handleCancel}
          style={{backgroundColor: '#E0E0E0', color: 'black', borderRadius: '25px'}}
        >
          annulation
        </button>

        <p style={{marginTop: '30px', fontSize: '0.75rem', color: '#888', fontWeight: 'bold'}}>
          Vos données seront stockées en toute sécurité
        </p>

      </div>
    </div>
  );
}

export default LogoutConfirmation;