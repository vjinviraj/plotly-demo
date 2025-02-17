// src/PlotlyChart.jsx
import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = () => {
  const data = [
    {
      x: ['January', 'February', 'March', 'April', 'May'],
      y: [65, 59, 80, 81, 56],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'rgb(75, 192, 192)' },
      name: 'Sales Data',
    },
    {
      x: ['January', 'February', 'March', 'April', 'May'],
      y: [40, 60, 75, 80, 50],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'rgb(255, 99, 132)' },
      name: 'Profit Data',
    },
  ];

  const layout = {
    title: {
      text: 'Sales and Profit Data Over Time',
      font: {
        size: 24,
        family: 'Arial, sans-serif',
      },
      color: '#333',
    },
    xaxis: {
      title: 'Months',
      titlefont: {
        size: 18,
        family: 'Arial, sans-serif',
        color: '#333',
      },
      tickfont: {
        size: 14,
        color: '#555',
      },
    },
    yaxis: {
      title: 'Values',
      titlefont: {
        size: 18,
        family: 'Arial, sans-serif',
        color: '#333',
      },
      tickfont: {
        size: 14,
        color: '#555',
      },
    },
    showlegend: true,
    hovermode: 'closest',
  };

  return (
    <div className="plotly-chart">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default PlotlyChart;
