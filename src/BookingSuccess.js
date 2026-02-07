import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Style de base

function BookingSuccess() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <h2 className="page-heading">Réservation Confirmée</h2>
      
      <div className="auth-card center-text" style={{padding:'40px'}}>
        <div className="icon-circle green" style={{fontSize:'3rem', marginBottom:'20px'}}>✔</div>
        <h3 style={{marginBottom:'20px'}}>Réservation Confirmée!</h3>
        
        <div style={{backgroundColor:'#E0E0E0', padding:'20px', borderRadius:'10px', textAlign:'left', marginBottom:'20px'}}>
          <p><strong>Patient :</strong> Rachid alawi</p>
          <p><strong>Date :</strong> 2025-12-08</p>
          <p><strong>Heure :</strong> 15:00</p>
          <p><strong>Téléphone:</strong> 0705283438</p>
        </div>

        <p style={{fontSize:'0.8rem', marginBottom:'30px'}}>Vous recevrez une confirmation par SMS</p>

        <div style={{display:'flex', gap:'10px'}}>
            <button className="auth-btn" style={{backgroundColor:'#008B8B'}} onClick={() => navigate('/booking')}>Nouvelle Réservation</button>
            <button className="auth-btn" style={{backgroundColor:'black', width:'50px'}} onClick={() => navigate('/dashboard')}>➜</button>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccess;