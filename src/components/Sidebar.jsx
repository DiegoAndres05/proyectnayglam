// Componente Sidebar reutilizable para navegación
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ active }) {
  return (
    <aside className="sidebar bg-purple-800 text-white w-[230px] min-h-screen flex flex-col fixed p-6">
      <div className="logo text-center font-bold text-xl mb-8">Nayglam</div>
      <ul className="flex-1">
        <li className={`rounded-lg flex items-center gap-2 p-2 hover:bg-purple-700 ${active === 'dashboard' ? 'bg-white/20' : ''}`}> <Link to="/" className="flex-1 flex items-center gap-2 h-full w-full"><span>📊</span> Dashboard</Link></li>
        <li className={`rounded-lg flex items-center gap-2 p-2 hover:bg-purple-700 ${active === 'clientes' ? 'bg-white/20' : ''}`}> <Link to="/clientes" className="flex-1 flex items-center gap-2 h-full w-full"><span>👥</span> Clientes</Link></li>
        <li className={`rounded-lg flex items-center gap-2 p-2 hover:bg-purple-700 ${active === 'registro' ? 'bg-white/20' : ''}`}> <Link to="/registro" className="flex-1 flex items-center gap-2 h-full w-full"><span>✏️</span> registro</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
