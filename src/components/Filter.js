import React from 'react'

const Filter = ({ change, settings  }) => {
  return (
    <div>
        <h2>filter</h2>
        <h3>frequency</h3>
        <input type="range" onChange={change} id="frequency"  max="10000"></input>
        <h3>detune</h3>
        <input type="range" onChange={change} id="detune"></input>
        <h3>Q</h3>
        <input type="range" onChange={change} id="Q"  max="10"></input>
        <h3>gain</h3>
        <input type="range" onChange={change} id="gain"  max="10"></input>


        
    </div>
  )
}

export default Filter