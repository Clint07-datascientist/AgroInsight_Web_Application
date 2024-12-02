export const generateMockData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i + 1,
        pH: (Math.random() * (8 - 5) + 5).toFixed(2), // pH range between 5 and 8
        temperature: (Math.random() * (35 - 15) + 15).toFixed(2), // Temperature range between 15°C and 35°C
        moisture: (Math.random() * (100 - 20) + 20).toFixed(2) // Moisture range between 20% and 100%
      });
    }
    return data;
  };