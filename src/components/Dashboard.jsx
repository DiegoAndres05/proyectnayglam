// Componente Dashboard migrado desde dashboard.html y dashboard.js

import Sidebar from './Sidebar';
import React, { useState } from 'react';

const ordersData = [
  { nombre: "Laptop HP", precio: "$110", pago: "Pendiente", estado: "PENDIENTE" },
  { nombre: "AirPods", precio: "$89", pago: "Pagado", estado: "DEVUELTO" },
  { nombre: "PC Dell", precio: "$650", pago: "Pendiente", estado: "EN PROGRESO" },
  { nombre: "iPhone 14", precio: "$4500", pago: "Pagado", estado: "ENTREGADO" },
];

const clientsData = [
  { nombre: "John Doe", img: "https://i.pravatar.cc/40?img=1" },
  { nombre: "Olivia Anderson", img: "https://i.pravatar.cc/40?img=2" },
  { nombre: "Ethan Thompson", img: "https://i.pravatar.cc/40?img=3" },
  { nombre: "Benjamin Mitchell", img: "https://i.pravatar.cc/40?img=4" },
  { nombre: "Sophia Reynolds", img: "https://i.pravatar.cc/40?img=5" },
];

function Dashboard() {
  const [search, setSearch] = useState("");
  // Filtros y lógica pueden expandirse según necesidades

  return (
    <div className="flex bg-[#f7f4ff] min-h-screen font-sans">
      <Sidebar active="dashboard" />
      {/* Main */}
      <main className="main flex-1 ml-[250px] p-10 min-h-screen box-border">
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="🔍 Buscar..."
            className="w-[250px] p-3 rounded-full border-none outline-none bg-white shadow"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="user">
            <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full w-10 h-10" />
          </div>
        </header>

        {/* Estadísticas */}
        <section className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <div className="card bg-white p-6 rounded-xl shadow text-center border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold">2,345</h3>
            <p className="text-gray-500">Visitas</p>
          </div>
          <div className="card bg-white p-6 rounded-xl shadow text-center border-l-8 border-pink-400">
            <h3 className="text-2xl font-bold">1,342</h3>
            <p className="text-gray-500">Ventas</p>
          </div>
          <div className="card bg-white p-6 rounded-xl shadow text-center border-l-8 border-blue-400">
            <h3 className="text-2xl font-bold">475</h3>
            <p className="text-gray-500">Mensajes</p>
          </div>
          <div className="card bg-white p-6 rounded-xl shadow text-center border-l-8 border-green-400">
            <h3 className="text-2xl font-bold">$6,879</h3>
            <p className="text-gray-500">Ganancias</p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="content grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tabla de órdenes */}
          <div className="table-section bg-white p-6 rounded-xl shadow-md col-span-2">
            <div className="section-header flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Órdenes Recientes</h2>
              <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900">Ver todos</button>
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-purple-100 p-3 text-left">Nombre</th>
                  <th className="bg-purple-100 p-3 text-left">Precio</th>
                  <th className="bg-purple-100 p-3 text-left">Pago</th>
                  <th className="bg-purple-100 p-3 text-left">Estatus</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((o, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="p-3">{o.nombre}</td>
                    <td className="p-3">{o.precio}</td>
                    <td className="p-3">{o.pago}</td>
                    <td className="p-3">
                      <span className={`status px-2 py-1 rounded text-xs font-semibold ${
                        o.estado === 'PENDIENTE' ? 'bg-yellow-100 text-yellow-800' :
                        o.estado === 'DEVUELTO' ? 'bg-pink-100 text-pink-700' :
                        o.estado === 'EN PROGRESO' ? 'bg-blue-100 text-blue-700' :
                        o.estado === 'ENTREGADO' ? 'bg-green-100 text-green-700' : ''
                      }`}>
                        {o.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nuevos clientes */}
          <div className="clients-section bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Nuevos Clientes</h2>
            <ul className="list-none p-0">
              {clientsData.map((c, i) => (
                <li key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                  <img src={c.img} alt={c.nombre} className="rounded-full w-10 h-10" />
                  <div className="info font-semibold">{c.nombre}</div>
                  <div className="icons flex gap-2 ml-auto text-lg">
                    <span className="cursor-pointer">📞</span>
                    <span className="cursor-pointer">💬</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
