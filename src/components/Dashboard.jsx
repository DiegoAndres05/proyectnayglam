// Componente Dashboard migrado desde dashboard.html y dashboard.js

import Sidebar from './Sidebar';
import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { dataGanancias, dataServicios } from './dashboardChartsData';

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
  {/* Sidebar eliminado, ahora solo se renderiza desde App.jsx */}
      {/* Main */}  
  <main className="main flex-1 p-10 min-h-screen box-border">
        
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
          {/* Gráfico de ganancias mensuales */}
          <div className="bg-white p-6 rounded-xl shadow-md col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Ganancias Mensuales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataGanancias} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ganancias" stroke="#8b5cf6" strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Gráfico de servicios */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Servicios Realizados</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataServicios} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="servicio" type="category" width={90} />
                <Tooltip />
                <Legend />
                <Bar dataKey="cantidad" fill="#f472b6" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sección de nuevos clientes eliminada */}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
