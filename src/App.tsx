import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RiskAssessment from './components/RiskAssessment';
import InteractivePage from './components/InteractivePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manual" element={<RiskAssessment />} />
        <Route path="/interactive" element={<InteractivePage />} />
      </Routes>
    </Router>
  );
}

export default App;