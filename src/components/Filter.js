import React from 'react'

const Filter = ({ change, settings  }) => {

    const {frequency, detune, Q, gain, type} = settings; 
  return (
    <div>
        <h2>filter</h2>
        <h3>frequency</h3>
        <input value={frequency}  type="range" onChange={change} id="frequency"  max="10000"></input>
        <h3>detune</h3>
        <input value={detune} type="range" onChange={change} id="detune"></input>
        <h3>Q</h3>
        <input  value={Q} type="range" onChange={change} id="Q"  max="10"></input>
        <h3>gain</h3>
        <input value={gain} type="range" onChange={change} id="gain"  max="10"></input>


        
    </div>
  )
}

export default Filter