import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Clientes from './components/Clientes';
import Registro from './components/Registro';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const collapseTimeout = useRef(null);

  // Funciones para pasar a Sidebar
  const handleSidebarEnter = () => {
    if (collapseTimeout.current) {
      clearTimeout(collapseTimeout.current);
    }
    setSidebarOpen(true);
  };
  const handleSidebarLeave = () => {
    if (collapseTimeout.current) {
      clearTimeout(collapseTimeout.current);
    }
    collapseTimeout.current = setTimeout(() => {
      setSidebarOpen(false);
    }, 1000);
  };

  // Determinar el ancho del sidebar
  const sidebarWidth = sidebarOpen ? 230 : 60;

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar
          open={sidebarOpen}
          onMouseEnter={handleSidebarEnter}
          onMouseLeave={handleSidebarLeave}
          active={window.location.pathname === '/' ? 'dashboard' : window.location.pathname.replace('/', '')}
        />
        <main
          className="transition-all duration-300 flex-1"
          onMouseEnter={handleSidebarLeave}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
