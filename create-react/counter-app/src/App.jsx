import './App.css'
import { CounterApp } from './CounterApp'
import HelloWordApp from './HelloWordApp'

function App() {

  return (
    <>
      <HelloWordApp/>
      <CounterApp value={1}/>
    </>
  )
}

export default App
