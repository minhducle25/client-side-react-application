import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopulationData } from './module/action/chartActions';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const VolcanoDensityChart = ({ volcanoId }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.populationData);

  useEffect(() => {
    dispatch(fetchPopulationData(volcanoId));
  }, [dispatch, volcanoId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available.</p>;

  const chartData = {
    labels: ['5km', '10km', '30km', '100km'],
    datasets: [
      {
        label: 'Population Density',
        data: [data.population_5km, data.population_10km, data.population_30km, data.population_100km],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default VolcanoDensityChart;
