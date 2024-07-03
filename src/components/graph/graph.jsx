import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.scss'
import { useState, useEffect } from 'react';

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
            backgroundColor: items.map(item => item.backgroundColor),
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

export default Graph
