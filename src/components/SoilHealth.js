// src/components/SoilHealth.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SoilHealth.css';

function SoilHealth() {
  const [soilData, setSoilData] = useState([]);
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/soil')
      .then(response => {
        setSoilData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the soil data!', error);
      });
  }, []);

  const getRecommendation = (moisture, pH) => {
    axios.post('http://localhost:5000/soil/recommendation', { moisture, pH })
      .then(response => {
        setRecommendation(response.data.recommendation);
      })
      .catch(error => {
        console.error('There was an error getting the recommendation!', error);
      });
  };

  return (
    <div className="soil-health">
      <h2>Soil Health Monitoring</h2>
      <p>Data on soil moisture, pH levels, and nutrient content.</p>
      <button onClick={() => getRecommendation(20, 6.5)}>Get Recommendation</button>
      <p>Recommendation: {recommendation}</p>
    </div>
  );
}

export default SoilHealth;
