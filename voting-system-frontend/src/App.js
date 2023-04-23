import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import CampaignList from './components/CampaignList';
import CampaignDetails from './components/CampaignDetails';
import CandidateList from './components/CandidateList';
import CandidateDetails from './components/CandidateDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/campaigns" element={<CampaignList />} />
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/candidates" element={<CandidateList />} />
          <Route path="/candidate/:id" element={<CandidateDetails />} />
          {/* Add any additional routes here */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
