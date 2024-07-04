import PropTypes from 'prop-types';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.scss'
import { useState, useEffect } from 'react';
import backgroundColors from './colors';

Chart.register(ArcElement, Tooltip, Legend);

function Graph({spends}) {
    const [items, setItems] = useState([])

    useEffect(() => {
      const totalSpent = {}

      spends.forEach(expense => {
        const category = expense.category;
        const amount = parseFloat(expense.amount);

        if (!totalSpent[category]) {
          totalSpent[category] = 0;
        }
        totalSpent[category] += amount;
      });

      const summarizedExpenses = Object.keys(totalSpent).map(category => ({
        category: category,
        totalSpent: totalSpent[category]
      }));

      setItems(summarizedExpenses)
      }, [spends])

    const chartData = {
        labels: items.map(item => item.category),
        datasets: [
          {
            data: items.map(item => item.totalSpent),
            backgroundColor: backgroundColors.map(bgColor => bgColor),
          },
        ],
      };

      const options = {
        cutout: '50%',
      };

    return (
        <div className='graph-wrapper'>
            <Doughnut data={chartData} options={options}/>
        </div>
    )
}

Graph.propTypes = {
    spends: PropTypes.array.isRequired,
}

export default Graph
