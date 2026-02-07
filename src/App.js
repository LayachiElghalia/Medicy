import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des pages
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import Search from './Search';
import Booking from './Booking';
import PasswordReset from './PasswordReset';
import DoctorsList from './DoctorsList';
import DoctorProfile from './DoctorProfile';
import BookingSuccess from './BookingSuccess'; 
import PatientProfile from './PatientProfile';
import LogoutConfirmation from './LogoutConfirmation'; 
import LogoutSuccess from './LogoutSuccess'; // <--- 1. IMPORT AJOUTÉ

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/doctors/:type" element={<DoctorsList />} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/profile" element={<PatientProfile />} />
        
        {/* Routes de déconnexion */}
        <Route path="/logout-confirm" element={<LogoutConfirmation />} />
        <Route path="/logout-success" element={<LogoutSuccess />} /> {/* <--- 2. ROUTE AJOUTÉE */}
      </Routes>
    </Router>
  );
}

export default App;