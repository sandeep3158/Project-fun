import './app.css'
import { useState } from 'react'

function App() {
  let  [color, setcolor] = useState('white')
 

  return (
 <div className="bg-main" style={{backgroundColor:color}}>
 <div className="btns">

  <button className='btn' id='red' onClick={()=>setcolor('red')}>Red</button>
  <button className='btn' id='blue'onClick={()=>setcolor('blue')}>Blue</button>
  <button className='btn' id='green'onClick={()=>setcolor('green')}>Green</button>
  <button className='btn' id='Black'onClick={()=>setcolor('black')}>Black</button>
 </div>


</div>

  )
}

export default App
