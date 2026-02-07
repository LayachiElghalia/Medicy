import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // On réutilise le style auth
import logoImg from './logo.png';

function PasswordReset() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="auth-page">
      <div className="auth-header-bar"><div className="auth-logo"><img src={logoImg} alt="Logo" style={{height:'30px'}}/></div></div>

      {/* ETAPE 1 : EMAIL (image_e952d5.png) */}
      {step === 1 && (
        <div className="auth-card center-text">
          <div className="icon-circle green">✉️</div>
          <h3>Mot de passe oublié?</h3>
          <p>Entrez votre email pour recevoir un code de réinitialisation</p>
          <label>Adresse email</label>
          <input type="email" className="auth-input" placeholder="exemple@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <button className="auth-btn" onClick={() => setStep(2)}>Envoyer le code</button>
        </div>
      )}

      {/* ETAPE 2 : CODE (image_e952af.png) */}
      {step === 2 && (
        <div className="auth-card center-text">
          <button className="back-btn" onClick={() => setStep(1)}>⬅ Retour</button>
          <h3>Vérification</h3>
          <p>Code envoyé à {email}</p>
          <label>Entrez le code à 6 chiffres</label>
          <input type="text" className="auth-input" placeholder="123456" />
          <p className="link-text">Renvoyer le code</p>
          <button className="auth-btn" onClick={() => setStep(3)}>Vérifier</button>
        </div>
      )}

      {/* ETAPE 3 : NOUVEAU MDP (image_e95273.png) */}
      {step === 3 && (
        <div className="auth-card center-text">
          <h3>Nouveau mot de passe</h3>
          <p>Choisissez un mot de passe sécurisé</p>
          <label>Nouveau mot de passe</label>
          <input type="password" className="auth-input" placeholder="........." />
          <label>Confirmer le mot de passe</label>
          <input type="password" className="auth-input" placeholder="........." />
          <button className="auth-btn" onClick={() => setStep(4)}>Réinitialiser le mot de passe</button>
        </div>
      )}

      {/* ETAPE 4 : SUCCES (image_e95235.png) */}
      {step === 4 && (
        <div className="auth-card center-text">
          <div className="icon-circle green">✔</div>
          <h3>Mot de passe réinitialisé!</h3>
          <p>Votre mot de passe a été modifié avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p>
          <button className="auth-btn" onClick={() => navigate('/login')}>Retour à la connexion</button>
        </div>
      )}
    </div>
  );
}

export default PasswordReset;