import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/Terms&Conditions";
import RefundPolicy from "./Pages/RefundPolicy";
import Home from "./Pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
