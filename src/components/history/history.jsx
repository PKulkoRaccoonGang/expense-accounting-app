import { useEffect, useState } from 'react'
import './style.scss'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from '../pdf/pdf';

function History({spends}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(spends)
    }, [spends])

    const list = items.map(item => {
        return (
            <li key={item.time_created}>
                <div className="spending-body">
                    {item.category}
                    <span className='amount'>-{item.amount}</span>
                </div>
                <button className='delete-spend'>&#10006;</button>
            </li>
        )
    })

    return (
        <div className="history-wrapper">
            <h2>
                Spending history:
            </h2>
            <PDFDownloadLink document={<Pdf spends={items} />}>
				<button>Download PDF</button>
			</PDFDownloadLink>
            <ul>
                {list}
            </ul>
        </div>


        
    )
}

export default History
