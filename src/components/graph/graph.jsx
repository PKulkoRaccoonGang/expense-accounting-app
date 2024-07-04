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
        setItems(spends)
    }, [spends])

    const chartData = {
        labels: items.map(item => item.id),
        datasets: [
          {
            data: items.map(item => item.spent),
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
