import React from 'react'

const Osc1 = ({changeFreq, freq, changeDetune, detune }) => {
  return (
    <div>
      <h1>Oscilator 1</h1>
      <p1>Set Frequency:</p1>
        <input value={freq} 
        onChange={changeFreq}
        type="range" 
        id="frequency" 
        max="5000"></input>
        <p1>Set Detune</p1>
        <input 
        value={detune} 
        onChange={changeDetune}
        type="range" 
        id="detune" 
        ></input>




    </div>
  )
}

export default Osc1