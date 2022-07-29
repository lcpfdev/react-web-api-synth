import React from 'react'
import './Osc1.css';

const Osc1 = ({ change, settings, changeType }) => {
  let { type, frequency, detune } = settings // destructuring
   return (
    <div className='synth'>  
      <h1>Oscilator 1</h1>   
      <p1>Set Frequency:</p1>
        <input 
        value={frequency} 
        onChange={change} 
        type="range" 
        id="frequency" 
        max="5000"></input>
        <p1>Set Detune:</p1>
        
        <input 
        value={detune} 
        onChange={change}
        type="range" 
        id="detune" 
        ></input>
        <p1>Set Wave</p1>
        <button id="sine" onClick={changeType} className={`${type==="sine" && "active"}`}>sine</button>

        <button id="triangle" onClick={changeType} className={`${type==="triangle" && "active"}`}>triangle</button>

        <button id="square" onClick={changeType} className={`${type==="square" && "active"}`}>square</button>

        <button id="sawtooth" onClick={changeType} className={`${type==="sawtooth" && "active"}`}>sawtooth</button>


        </div>
  )
}

export default Osc1