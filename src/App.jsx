import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstTest />
    </>
  )
}

export const FirstTest = () => {
  return (
    <div>
        <h2> First test </h2>
    </div>
  )
}

export default App
