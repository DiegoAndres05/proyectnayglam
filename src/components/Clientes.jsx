// Componente Clientes migrado desde clientes.html y clientes.js

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
// Utilidad para obtener y guardar clientes en localStorage
const getClientesLS = () => JSON.parse(localStorage.getItem('clientes')) || [];
const setClientesLS = (clientes) => localStorage.setItem('clientes', JSON.stringify(clientes));

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [editando, setEditando] = useState(null); // id del cliente editando o null
  const [form, setForm] = useState({
    nombre: '', telefono: '', servicio: '', fecha: '', hora: '', costo: ''
  });

  // Cargar clientes al montar
  useEffect(() => {
    setClientes(getClientesLS());
  }, []);

  // Guardar en localStorage cuando cambian
  useEffect(() => {
    setClientesLS(clientes);
  }, [clientes]);

  // Filtrado por búsqueda
  const clientesFiltrados = clientes.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.servicio.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Editar cliente
  const handleEditar = (cliente) => {
    setEditando(cliente.id);
    setForm({ ...cliente });
  };

  // Eliminar cliente
  const handleEliminar = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
    if (editando === id) setEditando(null);
  };

  // Guardar cambios
  const handleGuardar = (e) => {
    e.preventDefault();
    setClientes(clientes.map(c => c.id === editando ? { ...form, id: editando } : c));
    setEditando(null);
  };

  // Cancelar edición
  const handleCancelar = () => {
    setEditando(null);
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  return (
    <div className="flex bg-[#f6f3ff] min-h-screen font-sans">
      <Sidebar active="clientes" />
      {/* Main */}
      <main className="main flex-1 ml-[230px] p-8 min-h-screen box-border">
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="🔍 Buscar cliente o servicio..."
            className="flex-1 p-3 rounded-lg border border-gray-200 text-base bg-white mr-4"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <div className="user">
            <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full w-10 h-10" />
          </div>
        </header>

        <section className="content flex flex-col gap-8">
          <h2 className="text-purple-900 text-2xl mb-4 font-semibold">Clientes Registrados</h2>

          <div className="table-section bg-white p-6 rounded-xl shadow-md overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[800px]">
              <thead>
                <tr>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Nombre</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Teléfono</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Servicio</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Fecha</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Hora</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Costo</th>
                  <th className="bg-purple-100 text-purple-900 font-semibold p-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clientesFiltrados.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-6 text-gray-400">Sin clientes</td></tr>
                ) : clientesFiltrados.map(c => (
                  <tr key={c.id} className="hover:bg-purple-50">
                    <td className="p-3">{c.nombre}</td>
                    <td className="p-3">{c.telefono}</td>
                    <td className="p-3">{c.servicio}</td>
                    <td className="p-3">{c.fecha}</td>
                    <td className="p-3">{c.hora}</td>
                    <td className="p-3">${c.costo}</td>
                    <td className="p-3 flex gap-2">
                      <button className="btn-edit border-none rounded-md px-2 py-1 cursor-pointer text-lg hover:bg-purple-500 hover:text-white transition" onClick={() => handleEditar(c)}>✏️</button>
                      <button className="btn-delete border-none rounded-md px-2 py-1 cursor-pointer text-lg hover:bg-red-600 hover:text-white transition" onClick={() => handleEliminar(c.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sección de edición */}
          {editando !== null && (
            <div className="edit-section bg-white p-6 rounded-xl shadow-md max-w-2xl w-full">
              <h2 className="text-purple-900 mb-6 text-xl font-semibold border-b border-gray-200 pb-2">Editar Cliente</h2>
              <form className="form-grid grid grid-cols-2 gap-6 mb-4" onSubmit={handleGuardar}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombreEditar" className="font-semibold text-gray-700">Nombre:</label>
                  <input type="text" id="nombreEditar" name="nombre" value={form.nombre} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefonoEditar" className="font-semibold text-gray-700">Teléfono:</label>
                  <input type="text" id="telefonoEditar" name="telefono" value={form.telefono} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="servicioEditar" className="font-semibold text-gray-700">Servicio:</label>
                  <input type="text" id="servicioEditar" name="servicio" value={form.servicio} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="fechaEditar" className="font-semibold text-gray-700">Fecha:</label>
                  <input type="date" id="fechaEditar" name="fecha" value={form.fecha} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="horaEditar" className="font-semibold text-gray-700">Hora:</label>
                  <input type="time" id="horaEditar" name="hora" value={form.hora} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="costoEditar" className="font-semibold text-gray-700">Costo:</label>
                  <input type="number" id="costoEditar" name="costo" value={form.costo} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-500 text-right" />
                </div>
                <div className="form-buttons flex justify-end gap-4 col-span-2 mt-6 pt-4 border-t border-gray-200">
                  <button type="submit" className="bg-purple-800 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow">💾 Guardar Cambios</button>
                  <button type="button" className="btn-cancel bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg shadow" onClick={handleCancelar}>❌ Cancelar</button>
                </div>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Clientes;
