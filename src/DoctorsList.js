import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Search.css';
import logoImg from './logo.png';
import { doctorsData } from './data'; // Assure-toi que ce fichier existe

function DoctorsList() {
  const { type } = useParams(); 
  const navigate = useNavigate();

  // Fonction pour convertir le slug URL en Nom de spécialité
  const formatType = (slug) => {
    switch(slug) {
      case 'cardiologue': return 'Cardiologue';
      case 'dentiste': return 'Dentiste';
      case 'generaliste': return 'Médecin généraliste'; // Changement pour correspondre aux données
      case 'pediatre': return 'Pédiatre';
      case 'dermatologue': return 'Dermatologue';
      case 'ophtalmologue': return 'Ophtalmologue';
      default: return slug;
    }
  };

  const targetSpecialty = formatType(type);

  // Configuration visuelle (Couleur & Icône)
  const getHeaderInfo = (spec) => {
    switch(spec) {
      case 'Cardiologue': return { color: '#98FB98', icon: '❤️' }; // Vert clair
      case 'Dentiste': return { color: '#B0E0E6', icon: '🦷' };    // Bleu poudre
      case 'Médecin généraliste': return { color: '#C0C0C0', icon: '🩺' }; // Gris
      case 'Pédiatre': return { color: '#66CDAA', icon: '👶' };    // Vert d'eau
      case 'Dermatologue': return { color: '#87CEEB', icon: '🖐️' };// Bleu ciel
      case 'Ophtalmologue': return { color: '#ADD8E6', icon: '👁️' };// Bleu clair
      default: return { color: '#eee', icon: '⚕️' };
    }
  };

  const headerInfo = getHeaderInfo(targetSpecialty);

  // Filtrage : On affiche seulement les médecins de la spécialité choisie
  const filteredDoctors = doctorsData.filter(doc => doc.specialty === targetSpecialty);

  return (
    <div className="search-page">
      
      {/* Header */}
      <header className="search-header">
         <button onClick={() => navigate('/search')} style={{border:'none', background:'none', fontSize:'1.5rem', cursor:'pointer'}}>⬅</button>
         <div className="search-logo-container">
            <img src={logoImg} alt="Logo" className="search-logo-img" style={{height:'35px'}} />
         </div>
         <div style={{width: 30}}></div>
      </header>

      <div className="search-content">
        
        {/* En-tête coloré dynamique */}
        <div style={{
          backgroundColor: headerInfo.color, 
          padding: '25px', 
          borderRadius: '15px', 
          marginBottom: '20px', 
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
        }}>
           <span style={{fontSize:'3rem', display:'block', marginBottom:'10px'}}>{headerInfo.icon}</span>
           <h2 style={{margin:0, color:'#333', fontSize:'1.8rem', fontFamily:'serif'}}>{targetSpecialty}</h2>
        </div>

        {/* Liste des médecins */}
        <div className="doctors-list-vertical">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div 
                key={doc.id} 
                className="doc-card-horizontal"
                // --- AJOUT DU CLIC SUR LA CARTE VERS LE PROFIL ---
                onClick={() => navigate(`/doctor-profile/${doc.id}`)}
                style={{cursor: 'pointer', transition: 'transform 0.2s'}} // Style pour le curseur main
              >
                {/* Image unique pour chaque médecin */}
                <img src={doc.image} alt={doc.name} className="doc-avatar" />
                
                <div className="doc-info">
                  <h4 className="doc-name">{doc.name}</h4>
                  <p className="doc-job" style={{color: '#008B8B', fontWeight:'bold'}}>{doc.specialty}</p>
                  
                  <div style={{display:'flex', alignItems:'center', gap:'5px', marginBottom:'5px'}}>
                    <span style={{color:'#FFD700'}}>⭐</span>
                    <span style={{fontSize:'0.85rem', fontWeight:'bold'}}>{doc.rating}</span>
                  </div>

                  <p className="doc-loc" style={{color:'#666'}}>📍 {doc.location}</p>
                </div>
                
                {/* Bouton Réservation (ne déclenche pas le clic carte grâce à stopPropagation) */}
                <button 
                  className="btn-book-small" 
                  onClick={(e) => {
                    e.stopPropagation(); // Empêche d'aller sur le profil
                    navigate('/booking');
                  }}
                  style={{backgroundColor:'#98FB98', color:'#006400', padding:'8px 15px'}}
                >
                  Aujourd'hui
                </button>
              </div>
            ))
          ) : (
            <p style={{textAlign:'center', color:'#777', marginTop:'30px'}}>
              Aucun médecin trouvé pour cette spécialité.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default DoctorsList;