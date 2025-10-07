// Componente Registro migrado desde registro.html y registro.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Registro() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', servicio: '', fecha: '', hora: '', costo: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar en localStorage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const nuevoCliente = {
      ...form,
      id: Date.now()
    };
    localStorage.setItem('clientes', JSON.stringify([...clientes, nuevoCliente]));
    setMensaje('Cliente registrado correctamente');
    setForm({ nombre: '', telefono: '', servicio: '', fecha: '', hora: '', costo: '' });
    setTimeout(() => setMensaje(''), 2000);
  };

  return (
    <div className="flex bg-[#f6f3ff] min-h-screen font-sans">
  {/* Sidebar eliminado, ahora solo se renderiza desde App.jsx */}
  <main className="main flex-1 p-8 min-h-screen box-border">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-purple-900">Registro de Cliente</h1>
        </header>
        <section className="content flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="formulario bg-white p-8 rounded-xl shadow-md max-w-lg w-full mx-auto flex flex-col gap-4">
            <label className="font-semibold">Nombre:
              <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full" />
            </label>
            <label className="font-semibold">Teléfono:
              <input type="text" name="telefono" value={form.telefono} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full" />
            </label>
            <label className="font-semibold">Servicio:
              <input type="text" name="servicio" value={form.servicio} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full" />
            </label>
            <label className="font-semibold">Fecha:
              <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full" />
            </label>
            <label className="font-semibold">Hora:
              <input type="time" name="hora" value={form.hora} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full" />
            </label>
            <label className="font-semibold">Costo:
              <input type="number" name="costo" value={form.costo} onChange={handleChange} required className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 w-full text-right" />
            </label>
            <button type="submit" className="bg-purple-800 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow mt-4">Guardar Cliente</button>
            {mensaje && <div className="text-green-600 text-center font-semibold mt-2">{mensaje}</div>}
          </form>
        </section>
      </main>
    </div>
  );
}

export default Registro;
