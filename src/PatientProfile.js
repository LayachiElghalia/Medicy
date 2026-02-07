import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientProfile.css';
import logoImg from './logo.png';

// Images pour la démo
const bannerImg = "https://img.freepik.com/free-photo/doctor-consulting-patient_1154-526.jpg"; // Image médecin/patient
const patientImg = "https://randomuser.me/api/portraits/men/32.jpg"; // Photo d'Ahmed

function PatientProfile() {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, doctor: "Dr. Sarah Benjelloun", type: "Médecin généraliste", date: "15 Déc 2025", time: "10:00" },
    { id: 2, doctor: "Dr. Karim Alami", type: "Cardiologue", date: "20 Déc 2025", time: "14:00" }
  ];

  return (
    <div className="patient-container">
      
      {/* HEADER */}
      <header className="patient-header">
        <div className="header-logo" onClick={() => navigate('/')}>
           <img src={logoImg} alt="Medicy" style={{height:'30px'}} />
        </div>
        <button className="btn-logout-icon" onClick={() => navigate('/login')}>
          {/* Icône de sortie */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        </button>
      </header>

      {/* BANNIÈRE */}
      <div className="patient-banner" style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="overlay"></div>
      </div>

      {/* CARTE PROFIL */}
      <div className="patient-info-card">
        <img src={patientImg} alt="Ahmed Tazi" className="patient-avatar" />
        <div className="patient-details">
          <h2>Ahmed Tazi</h2>
          <p className="sub-text">35 ans - homme</p>
          <p className="sub-text">📍 Casablanca</p>
          <p className="sub-text small">+212 5XX-XXXXXX</p>
          <p className="sub-text small">contact@cabinet.ma</p>
        </div>
      </div>

      <div className="content-wrapper">
        
        {/* STATISTIQUES COLORÉES */}
        <div className="stats-colored-grid">
          <div className="stat-box red">
            <span>Groupe sanguin</span>
            <h3>+O</h3>
          </div>
          <div className="stat-box purple">
            <span>L'état</span>
            <h3>Bien</h3>
          </div>
          <div className="stat-box blue">
            <span>Hauteur</span>
            <h3>175 cm</h3>
          </div>
          <div className="stat-box green">
            <span>Le poids</span>
            <h3>78 KG</h3>
          </div>
        </div>

        {/* ESPACE PATIENT */}
        <div className="patient-dashboard-section">
          <div className="dashboard-title">
            <span style={{fontSize:'1.5rem', marginRight:'10px'}}>📅</span>
            <h3>Mon Espace Patient</h3>
          </div>

          <div className="section-block">
            <h4>Mes rendez-vous</h4>
            {appointments.map((app) => (
              <div key={app.id} className="appointment-card">
                <div>
                  <strong>{app.doctor}</strong>
                  <p style={{fontSize:'0.8rem', color:'#666', margin:'2px 0'}}>{app.type}</p>
                  <div style={{fontSize:'0.75rem', color:'#333'}}>
                    📅 {app.date} 🕒 {app.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-block">
            <h4>Historique médical</h4>
            <div className="history-list">
              <div className="history-item">
                <span>Consultations</span>
                <strong>12</strong>
              </div>
              <div className="history-item">
                <span>Ordonnances</span>
                <strong>8</strong>
              </div>
              <div className="history-item">
                <span>Examens</span>
                <strong>5</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PatientProfile;