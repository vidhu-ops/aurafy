import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientLogin from "./pages/ClientLogin";
import HealerLogin from "./pages/HealerLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLogin />} />
        <Route path="/healer" element={<HealerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;