import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color,setColor] = useState('blue')

  return (
    <>
  
      <div className="card" style={{background:color}}>
        <h2>Count:{count}</h2>
        <button onClick={()=>{
          setCount(count+1)
          {count%2==0?setColor('red'):setColor('blue')}
          }}>
            Click
        </button>
      </div>
     
    </>
  )
}

export default App
