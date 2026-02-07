import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorProfile.css';
// CORRECTION ICI : Ajout du dossier /images/
import logoImg from './logo.png'; 
import { doctorsData } from './data'; 

const bannerImg = "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg"; 

function DoctorProfile() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère le numéro (ex: 1)

  // CHERCHE LE BON MÉDECIN DANS LA LISTE
  const doctor = doctorsData.find(d => d.id === parseInt(id));

  // Si pas trouvé (erreur URL), on affiche un message
  if (!doctor) {
    return <div style={{padding:20, textAlign:'center'}}>Médecin introuvable <button onClick={()=>navigate(-1)}>Retour</button></div>;
  }

  return (
    <div className="profile-page-container">
      
      <header className="profile-header-simple">
        <div className="logo-container" onClick={() => navigate('/')}>
           <img src={logoImg} alt="Medicy" style={{height:'30px'}} />
        </div>
      </header>

      <div className="profile-banner" style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="banner-overlay"></div>
      </div>

      <div className="profile-content-wrapper">
        
        {/* CARTE DYNAMIQUE AVEC LES INFOS DU MÉDECIN TROUVÉ */}
        <div className="doctor-id-card">
          <div className="doctor-photo-container">
            <img src={doctor.image} alt={doctor.name} className="doctor-photo-large" />
          </div>
          
          <div className="doctor-main-info">
            <h1 className="doctor-name-title">{doctor.name}</h1>
            <p className="doctor-specialty-subtitle">{doctor.specialty}</p>
            
            <div className="badges-row">
              <span className="info-badge">🎓 15+ ans d'expérience</span>
              <span className="info-badge star-badge">⭐ {doctor.rating}</span>
            </div>
            
            <div className="location-badge">
              📍 {doctor.location}
            </div>
          </div>
        </div>

        <div className="doctor-details-section">
          <div className="detail-block">
            <h3>À propos</h3>
            {/* Utilisation dynamique du nom et de la spécialité */}
            <p>Le <strong>{doctor.name}</strong> est un expert reconnu en {doctor.specialty}. Spécialiste dévoué, offrant un suivi personnalisé et des soins de qualité à {doctor.location}.</p>
          </div>

          <div className="detail-block">
            <h3>Formation</h3>
            <p>📄 Faculté de Médecine et de Pharmacie</p>
          </div>

          <div className="detail-block">
            <h3>Langues parlées</h3>
            <div className="languages-row">
              <span className="lang-tag">Arabe</span>
              <span className="lang-tag">Français</span>
              <span className="lang-tag">Anglais</span>
            </div>
          </div>

          <div className="pricing-card">
            <h2 className="price-tag">300 - 500 DH</h2>
            <p className="price-subtitle">Prix de la consultation</p>
            
            <button className="btn-take-rdv" onClick={() => navigate('/booking')}>
              Prendre rendez-vous
            </button>
            
            <div className="contact-mini">
              <p>Disponible Aujourd'hui</p>
              <p>+212 5XX-XXXXXX</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DoctorProfile;