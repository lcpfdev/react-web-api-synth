import React from 'react'
import './Osc1.css';

const Osc1 = ({changeFreq, freq, changeDetune, detune, changeType }) => {
  return (
    <div>
      
      <h1>Oscilator 1</h1>
      
      <p1>Set Frequency:</p1>
        <input value={freq} 
        onChange={changeFreq}
        type="range" 
        id="frequency" 
        max="5000"></input>
        <p1>Set Detune:</p1>
        
        <input 
        value={detune} 
        onChange={changeDetune}
        type="range" 
        id="detune" 
        ></input>


        <p1>Change wave type:</p1>
        <h3>Wave:</h3>
        <button id="sine" onClick={changeType} className={``}>Sine</button>
        <button id="triangle" onClick={changeType} className={``}>Triangle</button>
        <button id="square" onClick={changeType} className={``}>square</button>
        <button id="sawtooth" onClick={changeType} className={``}>sawtooth</button>
     
        




        </div>




  )
}

export default Osc1