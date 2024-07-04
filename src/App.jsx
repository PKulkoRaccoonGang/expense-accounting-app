import { useEffect, useState } from 'react'
import './App.scss'
import './styles/normalize.scss'
import './styles/base.scss'
import Form from './components/form/form'
import Graph from './components/graph/graph'
// import data from './data'
import mockData from './mockData'
import categories from './categories'
import History from './components/history/history'
import Pdf from './components/pdf/pdf'

function App() {
  const [spends, setSpends] = useState([])

  useEffect(() => {
    setSpends(mockData.expenses)

  }, [])

  function updateSpends(newItem) {
    const updatedSpends = [...spends, newItem]
    setSpends(updatedSpends)
  }

  return (
    <>
      <Graph spends={spends}></Graph>
      <Form categories={categories} updateSpends={updateSpends}></Form>
      <History spends={spends}></History>
    </>
  )
}

export default App
