import React, { useState, useEffect } from 'react';
import { generateMockData } from '../../utils/mockData';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const SoilHealth = () => {
  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    const data = generateMockData();
    setSoilData(data);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <h2>Soil Health Analytics</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          <h3>Soil pH</h3>
          <LineChart
            width={400}
            height={300}
            data={soilData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pH" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div>
          <h3>Soil Temperature</h3>
          <BarChart
            width={400}
            height={300}
            data={soilData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temperature" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <h3>Soil Moisture</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={soilData}
              dataKey="moisture"
              nameKey="id"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {soilData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default SoilHealth;