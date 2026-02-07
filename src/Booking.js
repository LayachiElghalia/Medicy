import React from 'react';
import './Auth.css'; // On utilise le style auth

function Booking() {
  const doctors = [
    { name: "Dr. Martin Dubois", spec: "Cardiologue" },
    { name: "Dr. Sophie Laurent", spec: "Dermatologue" },
    { name: "Dr. Pierre Rousseau", spec: "Généraliste" }
  ];

  return (
    <div className="auth-page">
      <h2 className="page-heading" style={{color:'#5C322D'}}>Prendre un rendez-vous</h2>
      
      <div className="auth-card" style={{backgroundColor:'#fff', maxWidth:'500px'}}>
        {doctors.map((doc, i) => (
          <div key={i} style={{marginBottom:'15px', padding:'10px', border:'1px solid #eee', borderRadius:'8px'}}>
            <h4 style={{margin:0}}>{doc.name}</h4>
            <p style={{margin:0, fontSize:'0.9rem', color:'#777'}}>{doc.spec}</p>
            <span style={{fontSize:'0.8rem', color:'green'}}>Disponible</span>
          </div>
        ))}

        <label style={{marginTop:'20px', display:'block'}}>Date du rendez-vous</label>
        <input type="date" className="auth-input" />

        <label style={{marginTop:'10px', display:'block'}}>Horaire</label>
        <select className="auth-input">
          <option>09:00 - 09:30</option>
          <option>10:00 - 10:30</option>
        </select>

        <button className="auth-btn" style={{backgroundColor:'#5C322D', color:'white', marginTop:'20px'}}>
          Confirmer le rendez-vous
        </button>
      </div>
    </div>
  );
}

export default Booking;