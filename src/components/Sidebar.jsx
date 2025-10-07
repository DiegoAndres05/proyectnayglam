// Componente Sidebar reutilizable para navegación
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ active, open, onMouseEnter, onMouseLeave }) {
  return (
    <aside
      className={`sidebar bg-purple-800 text-white min-h-screen flex flex-col transition-all duration-300 ease-in-out ${open ? 'w-[230px] p-6' : 'w-[60px] p-2 items-center'}`}
      style={{ boxShadow: '2px 0 8px rgba(80,0,80,0.08)' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* El sidebar ahora es dinámico, no hay botón */}
      <div className={`logo font-bold text-xl mb-8 transition-all duration-300 ${open ? 'text-center opacity-100' : 'opacity-0 h-0 mb-0 overflow-hidden'}`}>Nayglam</div>
      <ul className="flex-1 flex flex-col gap-2 w-full">
        <li className={`rounded-lg flex items-center h-12 p-2 hover:bg-purple-700 transition-colors duration-200 ${active === 'dashboard' ? 'bg-white/20' : ''}`}> 
          <Link to="/" className="flex items-center h-full w-full">
            <span className="text-xl min-w-[32px] flex items-center justify-center h-full">📊</span>
            <span className={`transition-all duration-300 flex items-center h-full ${open ? 'opacity-100 ml-2 w-auto' : 'opacity-0 w-0 ml-0 overflow-hidden'}`}>Dashboard</span>
          </Link>
        </li>
        <li className={`rounded-lg flex items-center h-12 p-2 hover:bg-purple-700 transition-colors duration-200 ${active === 'clientes' ? 'bg-white/20' : ''}`}> 
          <Link to="/clientes" className="flex items-center h-full w-full">
            <span className="text-xl min-w-[32px] flex items-center justify-center h-full">👥</span>
            <span className={`transition-all duration-300 flex items-center h-full ${open ? 'opacity-100 ml-2 w-auto' : 'opacity-0 w-0 ml-0 overflow-hidden'}`}>Clientes</span>
          </Link>
        </li>
        <li className={`rounded-lg flex items-center h-12 p-2 hover:bg-purple-700 transition-colors duration-200 ${active === 'registro' ? 'bg-white/20' : ''}`}> 
          <Link to="/registro" className="flex items-center h-full w-full">
            <span className="text-xl min-w-[32px] flex items-center justify-center h-full">✏️</span>
            <span className={`transition-all duration-300 flex items-center h-full ${open ? 'opacity-100 ml-2 w-auto' : 'opacity-0 w-0 ml-0 overflow-hidden'}`}>Registro</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
