import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// --- IMPORT DES IMAGES ---
import heroImg from './hero.jpg';
import cardioImg from './cardio.jpg';
import pediatrieImg from './pediatrie.jpg';
import psyImg from './psy.jpg';
import equipeImg from './equipe.jpg';
import aboutImg from './about.jpg';

import iconRdv from './icon-dv.jpg';
import iconConsult from './icon-consult.jpg';
import iconSoin from './icon-soin.jpg';

// IMPORT DU LOGO (Assure-toi d'avoir renommé ton image en logo.jpg)
import logoImg from './logo.png'; 

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      
      {/* --- NAVBAR --- */}
      <nav className="lp-navbar">
        
        {/* ICI : ON REMPLACE LE TEXTE PAR L'IMAGE */}
        <div className="lp-logo">
          <img src={logoImg} alt="Logo Medicy" className="logo-image" />
        </div>

        <ul className="lp-nav-links">
          <li><a href="/">Neurochirurgie</a></li>
          <li><a href="/">Recherche</a></li>
          <li><a href="/">Spécialités</a></li>
          <li><a href="/">Médecins</a></li>
          <li><a href="/">Adresse</a></li>
        </ul>
        
        <button className="lp-btn-login" onClick={() => navigate('/login')}>
          Se connecter
        </button>
        
      </nav>

      {/* ... LE RESTE DU CODE RESTE EXACTEMENT LE MÊME ... */}
      
      <header className="lp-hero">
        <div className="lp-hero-content">
          <h1>Réservez Facilement votre rendez-vous Médical</h1>
          <p>Trouvez les meilleurs médecins et réservez votre consultation en quelques minutes.</p>
          <button className="lp-btn-primary">Prendre rendez-vous</button>
        </div>
        <div className="lp-hero-image">
          <img src={heroImg} alt="Consultation médicale" />
        </div>
      </header>

      <section className="lp-section" id="specialites">
        <h2 className="lp-title">Domaines d'Expertise</h2>
        <div className="lp-grid">
          <div className="lp-card">
            <img src={cardioImg} alt="Cardiologie" />
            <div className="card-text">
              <h3>Cardiologie</h3>
              <p>Diagnostic et traitement des maladies cardiovasculaires.</p>
            </div>
          </div>
          <div className="lp-card">
            <img src={pediatrieImg} alt="Pédiatrie" />
            <div className="card-text">
              <h3>Pédiatrie</h3>
              <p>Soins complets pour les enfants et les nouveaux-nés.</p>
            </div>
          </div>
          <div className="lp-card">
            <img src={psyImg} alt="Psychiatrie" />
            <div className="card-text">
              <h3>Psychiatrie</h3>
              <p>Accompagnement psychologique et soutien mental.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section lp-team" id="medecins">
        <div className="lp-text">
          <h2 className="lp-title">Notre Équipe Médicale</h2>
          <h3>Expertise et Professionnalisme</h3>
          <p>Notre équipe médicale est composée de spécialistes qualifiés.</p>
          <h3>Approche Personnalisée</h3>
          <p>Chaque patient bénéficie d'un suivi unique adapté à sa situation.</p>
        </div>
        <div className="lp-image">
          <img src={equipeImg} alt="Équipe de médecins" />
        </div>
      </section>

      <section className="lp-about">
        <div className="lp-about-content">
          <img src={aboutImg} alt="Patiente heureuse" className="circle-img" />
          <div className="lp-about-text">
            <h2>À Propos de Nous</h2>
            <p>Medicy est un centre médical moderne offrant des soins de qualité.</p>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <h2 className="lp-title">Mes services</h2>
        <div className="lp-services-grid">
          <div className="service-item">
            <div className="s-icon-img"><img src={iconRdv} alt="Calendrier" /></div>
            <h3>Rendez-vous</h3>
            <p>Réservez facilement votre consultation en ligne.</p>
          </div>
          <div className="service-item">
            <div className="s-icon-img"><img src={iconConsult} alt="Dossier" /></div>
            <h3>Consultation</h3>
            <p>Bénéficiez d'un diagnostic précis.</p>
          </div>
          <div className="service-item">
            <div className="s-icon-img"><img src={iconSoin} alt="Coeur" /></div>
            <h3>Suivi et Soins</h3>
            <p>Profitez d'un suivi régulier.</p>
          </div>
        </div>
      </section>

      <footer className="lp-footer" id="adresse">
        <div className="footer-col">
          {/* Logo aussi dans le footer si tu veux */}
          <div className="lp-logo" style={{marginBottom: '10px'}}>
             <img src={logoImg} alt="Logo" style={{height: '40px'}} />
          </div>
          <a href="/">À Propos</a>
          <a href="/">Carrières</a>
        </div>
        <div className="footer-col">
          <h4>Nos Spécialités</h4>
          <a href="/">Cardiologie</a>
          <a href="/">Pédiatrie</a>
        </div>
        <div className="footer-col">
          <h4>Services Patients</h4>
          <a href="/">Prendre rendez-vous</a>
          <a href="/">Tarifs</a>
        </div>
        <div className="footer-bottom">
           <p>📍 Adresse: Bloc 4, Ville, Code Postal</p>
           <p>📞 Téléphone: +212 600 000 000</p>
           <p>✉️ Email: contact@medicy.ma</p>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;