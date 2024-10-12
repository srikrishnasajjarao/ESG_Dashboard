import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Welcome to the ESG Metrics Dashboard</h1>;
}

function CompanyDetails() {
  return <h1>Company Details Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-details" element={<CompanyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
