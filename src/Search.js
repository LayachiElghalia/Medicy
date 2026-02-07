import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import logoImg from './logo.png'; 

// Images des médecins (liens stables)
const imgFemme1 = "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg";
const imgHomme1 = "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg";
// const imgFemmeVoile = "https://img.freepik.com/free-photo/front-view-female-doctor-with-medical-mask-posing-with-crossed-arms_23-2148445776.jpg";
const imgHomme2 = "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg";

function Search() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour ouvrir/fermer le menu

  // Fonction pour basculer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Données des spécialités avec le nombre de praticiens (comme sur ton image)
  const specialties = [
    { name: "Médecin généraliste", count: "2,847 praticiens", slug: "generaliste", color: "#C0C0C0", icon: "🩺" },
    { name: "Dentiste", count: "1,523 praticiens", slug: "dentiste", color: "#B0E0E6", icon: "🦷" },
    { name: "Ophtalmologue", count: "892 praticiens", slug: "ophtalmologue", color: "#ADD8E6", icon: "👁️" },
    { name: "Cardiologue", count: "654 praticiens", slug: "cardiologue", color: "#98FB98", icon: "❤️" },
    { name: "Dermatologue", count: "743 praticiens", slug: "dermatologue", color: "#87CEEB", icon: "🖐️" },
    { name: "Pédiatre", count: "981 praticiens", slug: "pediatre", color: "#66CDAA", icon: "👶" }
  ];

  // Liste exacte des médecins recommandés de ton image
  const recommendedDoctors = [
    { 
      id: 1, 
      name: "Dr. Sarah Benjelloun", 
      job: "Médecin généraliste", 
      loc: "Casablanca, Maarif", 
      rating: "4.9 (234 avis)", 
      img: imgFemme1 
    },
    { 
      id: 2, 
      name: "Dr. Karim Alami", 
      job: "Cardiologue", 
      loc: "Casablanca, Maarif", 
      rating: "4.8 (312 avis)", 
      img: imgHomme1 
    },
    // { 
    //   id: 3, 
    //   name: "Dr. Safaa Belkacem", 
    //   job: "Dermatologue", 
    //   loc: "Rabat, Maroc", 
    //   rating: "4.9 (428 avis)", 
    //   img: imgFemmeVoile 
    // },
    { 
      id: 4, 
      name: "Dr. Tarik Kadiri", 
      job: "Pédiatre", 
      loc: "Marrakech, Maroc", 
      rating: "4.7 (256 avis)", 
      img: imgHomme2 
    }
  ];

  return (
    <div className="search-page">
      
      {/* HEADER AVEC MENU HAMBURGER (Zone Rouge en haut à droite) */}
      <header className="search-header">
        <div className="search-logo-container" onClick={() => navigate('/')}>
          <img src={logoImg} alt="Logo" className="search-logo-img" />
        </div>
        
        {/* Conteneur du menu */}
        <div style={{position: 'relative'}}>
          
          {/* Bouton Hamburger (3 barres) */}
          <button className="menu-btn-search" onClick={toggleMenu}>
             {isMenuOpen ? (
              // Croix si ouvert
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              // 3 barres si fermé
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          {/* LISTE DÉROULANTE (Navigation vers toutes les pages) */}
          {isMenuOpen && (
            <div className="search-menu-dropdown">
              <ul>
                <li onClick={() => navigate('/profile')}>👤 Mon Profil</li>
               
                <li onClick={() => navigate('/booking')}>📅 Mes Rendez-vous</li>
                <li onClick={() => navigate('/logout-confirm')} style={{color: 'red', borderTop: '1px solid #eee'}}>
  🚪 Déconnexion
</li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Ferme le menu si on clique ailleurs */}
      <div className="search-content" onClick={() => setIsMenuOpen(false)}>
        <h1 className="welcome-title">Bienvenue sur Medicy</h1>
        <p className="welcome-subtitle">Votre santé en quelques clics</p>
        
        {/* BARRE DE RECHERCHE VERTE */}
        <div className="search-box-container">
          <h2 className="search-box-title">Trouvez un praticien et prenez rendez-vous</h2>
          <p style={{fontSize:'0.8rem', color:'white', opacity:0.8, marginBottom:'10px'}}>Plus de 8,000 praticiens de santé disponibles au Maroc</p>
          <div className="search-inputs">
            <input type="text" placeholder="Spécialité, médecin..." className="search-input" />
            <input type="text" placeholder="Ville, code postal..." className="search-input" />
          </div>
          <button className="btn-search-action">Rechercher</button>
        </div>

        {/* GRILLE SPECIALITES (Zone Rouge au milieu) */}
        <div className="section-container">
          <h3 className="section-heading">Spécialités populaires</h3>
          <div className="specialties-grid">
            {specialties.map((spec, index) => (
              <div 
                key={index} 
                className="spec-card" 
                style={{backgroundColor: spec.color}}
                onClick={() => navigate(`/doctors/${spec.slug}`)}
              >
                <div className="spec-icon">{spec.icon}</div>
                <span className="spec-name">{spec.name}</span>
                <span className="spec-count">{spec.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LISTE PRATICIENS RECOMMANDES */}
        <div className="section-container">
          <h3 className="section-heading">Praticiens recommandés</h3>
          <div className="doctors-list-vertical">
            {recommendedDoctors.map((doc) => (
              <div key={doc.id} className="doc-card-horizontal">
                <img src={doc.img} alt={doc.name} className="doc-avatar" />
                <div className="doc-info">
                  <h4 className="doc-name">{doc.name}</h4>
                  <p className="doc-job">{doc.job}</p>
                  
                  <div style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'0.85rem'}}>
                    <span style={{color:'#FFD700'}}>⭐</span>
                    <strong>{doc.rating}</strong>
                  </div>

                  <p className="doc-loc">📍 {doc.loc}</p>
                </div>
                <button className="btn-book-small" onClick={() => navigate('/booking')}>Aujourd'hui</button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER DETAILLÉ (Zone Rouge en bas) */}
      <footer className="custom-footer">
        <div className="footer-left">
           <img src={logoImg} alt="Medicy" style={{height: '50px'}} />
        </div>
        
        <div className="footer-cols">
           <div className="footer-col-item">
             <h4>À Propos</h4>
             <p>Notre histoire</p>
             <p>Notre équipe médicale</p>
             <p>Nos valeurs</p>
             <p>Carrières</p>
             <p>Blog santé</p>
           </div>
           <div className="footer-col-item">
             <h4>Nos Spécialités</h4>
             <p>Cardiologie</p>
             <p>Pédiatrie</p>
             <p>Psychiatrie</p>
             <p>Consultations d'urgence</p>
             <p>Toutes les spécialités</p>
           </div>
           <div className="footer-col-item">
             <h4>Services Patients</h4>
             <p>Prendre rendez-vous</p>
             <p>Téléconsultation</p>
             <p>Résultats d'analyses</p>
             <p>Horaires et accès</p>
             <p>Tarifs et remboursements</p>
           </div>
        </div>
      </footer>

    </div>
  );
}

export default Search;