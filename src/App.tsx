// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de la página de inicio */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para el diseño en 3D */}
        <Route path="/design/4" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
