import './App.css';
import React from 'react';
import { useState } from 'react';
import Osc1 from './components/Osc1';

const audioContext = new AudioContext(); // Allows us to use api
const out = audioContext.destination; // Sets audio to output to speakers

const osc1 = audioContext.createOscillator(); // creates osc  
const gain1 = audioContext.createGain() // sets osc to gain 

osc1.connect(gain1);  // allows osc output
gain1.connect(out);


function App() {
  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)
  const changeOsc1Freq = e => {
    let {value} = e.target // taking value 
    setOsc1Freq(value);
    osc1.frequency.value = value
    // console.log(value)
  }
  return (
    <div className="App">
    <h1>React web Synth</h1>
    <button onClick={() => osc1.start()}>start osc</button>
    <button onClick={() => osc1.stop()}>stop osc</button>
    <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} />
      
    </div>
  );
}

export default App;
