import React from 'react';
import './AuthPages.css'; // Importez le fichier CSS
// Remplacez par le chemin réel de votre logo caducée
import logoImg from './caduceus_logo.png'; 

const LoginPage = () => {
  return (
    <div className="auth-container">
      {/* Barre d'en-tête */}
      <header className="auth-header">
        <img src={logoImg} alt="Medicy Logo" className="auth-logo" />
        <span className="auth-brand-name">Medicy</span>
      </header>

      <main className="auth-content">
        <h1 className="page-title">connexion</h1>

        <div className="auth-card">
          <h2 className="card-title">Accédez à votre espace santé</h2>

          <form>
            {/* Champ Email */}
            <div className="form-group">
              <label className="form-label">Email ou téléphone</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="exemple@email.com"
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="........."
              />
            </div>

            {/* Options: Se souvenir de moi & Mot de passe oublié */}
            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" /> Se souvenir de moi
              </label>
              {/* Lien vers la page mot de passe oublié */}
              <a href="/forgot-password" class="forgot-link">Mot de passe oublié?</a>
            </div>

            {/* Bouton de connexion */}
            <button type="submit" className="auth-button">
              Se connecter
            </button>
          </form>

          {/* Lien d'inscription */}
          <div className="auth-card-footer">
            Pas encore de compte? 
            <a href="/signup" className="register-link">S'inscrire</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;