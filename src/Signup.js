import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; // On utilise le nouveau CSS

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    birthDate: '',
    gender: '',
    password: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGender = (gender) => {
    setFormData(prev => ({ ...prev, gender: gender }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sauvegarde et redirection
    localStorage.setItem('user', JSON.stringify(formData));
    alert("Inscription réussie !");
    navigate('/login');
  };

  return (
    <div className="auth-page">
      {/* En-tête gris */}
      <div className="auth-header-bar">
        <div className="auth-logo">⚕️ Medicy</div>
      </div>

      <h2 className="page-heading">inscription</h2>

      <div className="auth-card">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Nom complet</label>
            <input type="text" name="fullName" className="auth-input" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="exemple@email.com" className="auth-input" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Date de naissance</label>
            <input type="text" name="birthDate" placeholder="jj/mm/aaaa" className="auth-input" value={formData.birthDate} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Sexe</label>
            <div className="gender-group">
              <button type="button" className={`gender-btn ${formData.gender === 'Féminin' ? 'selected' : ''}`} onClick={() => handleGender('Féminin')}>Féminin</button>
              <button type="button" className={`gender-btn ${formData.gender === 'Masculin' ? 'selected' : ''}`} onClick={() => handleGender('Masculin')}>Masculin</button>
            </div>
          </div>

          <div className="form-group">
            <label>Créez un mot de passe robuste</label>
            <p className="password-note">Votre mot de passe doit comporter au moins 8 caractères...</p>
            <input type="password" name="password" className="auth-input" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="form-group">
             <label className="checkbox-label">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                J'accepte les conditions d'utilisation
             </label>
          </div>

          {/* Note : Sur ton image le bouton s'appelle "Se connecter" mais c'est une inscription */}
          <button type="submit" className="auth-btn">S'inscrire</button>

        </form>
        
        <div className="auth-footer">
           Déjà un compte ? <Link to="/login">Connectez-vous</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;