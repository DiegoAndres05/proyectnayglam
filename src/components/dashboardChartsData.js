import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Datos de ejemplo para ganancias mensuales
export const dataGanancias = [
  { mes: 'Ene', ganancias: 1200 },
  { mes: 'Feb', ganancias: 2100 },
  { mes: 'Mar', ganancias: 800 },
  { mes: 'Abr', ganancias: 1600 },
  { mes: 'May', ganancias: 900 },
  { mes: 'Jun', ganancias: 1700 },
  { mes: 'Jul', ganancias: 2200 },
  { mes: 'Ago', ganancias: 2000 },
  { mes: 'Sep', ganancias: 1500 },
  { mes: 'Oct', ganancias: 2400 },
  { mes: 'Nov', ganancias: 1800 },
  { mes: 'Dic', ganancias: 2600 },
];

// Datos de ejemplo para servicios
export const dataServicios = [
  { servicio: 'Corte', cantidad: 40 },
  { servicio: 'Color', cantidad: 25 },
  { servicio: 'Peinado', cantidad: 15 },
  { servicio: 'Uñas', cantidad: 20 },
  { servicio: 'Depilación', cantidad: 10 },
];
