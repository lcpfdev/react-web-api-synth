import './App.css';
import React from 'react';

const audioContext = new AudioContext(); // Allows us to use api
const out = audioContext.destination; // Sets audio to output to speakers

const osc1 = audioContext.createOscillator(); // creates osc  
const gain1 = audioContext.createGain() // sets osc to gain 

osc1.connect(gain1);  // allows osc output
gain1.connect(out);





function App() {
  return (
    <div className="App">
    <h1>React web Synth</h1>
    <button onClick={() => osc1.start()}>start osc</button>
    <button onClick={() => osc1.stop()}>stop osc</button>
      
    </div>
  );
}

export default App;
