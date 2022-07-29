import React from 'react'
import './Osc1.css';

const Osc1 = ({ change, settings, changeType }) => {
  return (
    <div className='synth'>  
      <h1>Oscilator 1</h1>   
      <p1>Set Frequency:</p1>
        <input 
        value={settings.freq} 
        onChange={change}
        type="range" 
        id="frequency" 
        max="5000"></input>
        <p1>Set Detune:</p1>
        
        <input 
        value={settings.detune} 
        onChange={change}
        type="range" 
        id="detune" 
        ></input>
        <p1>Set Wave</p1>
        <button id="sine" oncClick={changeType} className={``}>Sine</button>
        <button id="triangle" oncClick={changeType} className={``}>triangle</button>
        <button id="square" oncClick={changeType} className={``}>square</button>
        <button id="sawtooth" oncClick={changeType} className={``}>sawtooth</button>


        </div>
  )
}

export default Osc1