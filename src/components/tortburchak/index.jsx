import React, { useState } from 'react'
import './style.css'

function Tortburchak() {
  const [Hajm, setHajm] = useState(0)
  const [Eni, setEni] = useState()
  const [Boyi, setBoyi] = useState()
  const [Balandligi, setBalandligi] = useState()

  function hajm() {
    setHajm(Eni * Boyi * Balandligi)
  }
  
  return (
    <div className='canteiner'>
      <div className="card1">

      <input onChange={event => setEni(event.target.value)} className='input' type="number" placeholder='eni'  id='car'/>
      <input onChange={event => setBoyi(event.target.value)} className='input' type="number" placeholder='boyi' id='car'/>
      <input onChange={event => setBalandligi(event.target.value)} className='input' type="number" placeholder='blandligi' id='car'/>
      <h1>Shirinlik hajmi = {Hajm}</h1>
      <button onClick={hajm}>start</button>
      </div>
    </div>
  )
}

export default Tortburchak