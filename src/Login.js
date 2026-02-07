import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- C'EST ICI QUE ÇA SE PASSE ---
    // On redirige vers la nouvelle page de Recherche
    navigate('/search'); 
  };

  return (
    <div className="auth-page">
      <div className="auth-header-bar">
        <div className="auth-logo">⚕️ Medicy</div>
      </div>

      <h2 className="page-heading">connexion</h2>

      <div className="auth-card">
        <h3 className="auth-title-card">Accédez à votre espace santé</h3>
        
        <form onSubmit={handleLogin}>
          
          <div className="form-group">
            <label>Email ou téléphone</label>
            <input type="text" name="email" placeholder="exemple@email.com" className="auth-input" value={credentials.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" name="password" placeholder="........." className="auth-input" value={credentials.password} onChange={handleChange} />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" name="remember" checked={credentials.remember} onChange={handleChange} />
              Se souvenir de moi
            </label>
            <Link to="/reset-password" class="forgot-link">Mot de passe oublié?</Link>
          </div>

          <button type="submit" className="auth-btn">Se connecter</button>

        </form>

        <div className="auth-footer">
           Pas encore de compte? <Link to="/signup">S'inscrire</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;