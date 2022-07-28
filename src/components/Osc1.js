import React from 'react'

const Osc1 = ({changeFreq, freq }) => {
  return (
    <div>
        <input value={freq} onChange={changeFreq}type="range" id="frequency" max="5000"></input>
    </div>
  )
}

export default Osc1