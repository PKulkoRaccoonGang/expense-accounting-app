import { useEffect, useState } from 'react'
import './App.scss'
import './styles/normalize.scss'
import './styles/base.scss'
import Form from './components/form/form'
import Graph from './components/graph/graph'
import data from './data'

function App() {
  const [spends, setSpends] = useState([])

  useEffect(() => {
    setSpends(data)
  }, [])

  function updateSpends(updatedSpends) {
    setSpends(updatedSpends)
  }

  return (
    <>
      <Graph spends={spends}></Graph>
      <Form spends={spends} updateSpends={updateSpends}></Form>
    </>
  )
}

export default App
