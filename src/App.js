import './App.css';
import React from 'react';
import { useState } from 'react';
import Osc1 from './components/Osc1';
import Filter from './components/Filter';

const audioContext = new AudioContext(); // Allows us to use api
const out = audioContext.destination; // Sets audio to output to speakers

const osc1 = audioContext.createOscillator(); // creates osc  
const gain1 = audioContext.createGain() // sets osc to gain 
const  filter = audioContext.createBiquadFilter() // creates filter 

osc1.connect(gain1);  // allows osc output  osc - filter - out
gain1.connect(filter); 
filter.connect(out)// places filter between output on audio routing 

 
function App() {

  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune:  osc1.detune.value,
    type: osc1.type
 
  })


  const [filterSettings, setFilterSettings] = useState({
    frequency: osc1.frequency.value,
    detune:  osc1.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type
  })

  const changeFilter = e => {
    let {value, id} = e.target;
    setFilterSettings({...filterSettings, [id]: value})
    filter[id].value = value
  }


  const changeOsc1 = (e) => {
    let {value, id} = e.target
    setOsc1Settings({...osc1Settings, [id]: value})
    osc1[id].value = value;
  }

    
  const changeOsc1Type = (e) => { 
    let {id } = e.target
    setOsc1Settings({...osc1Settings, type: id})
     osc1.type = id; //type is just a string
    

  }

  




  return (
    <div className="App">
    <h1>React web Synth</h1>
    <button onClick={() => osc1.start()}>start osc</button>
    <button onClick={() => osc1.stop()}>stop osc</button>
    <Osc1 
    change={changeOsc1}
    settings={osc1Settings}
    changeType={changeOsc1Type}
    />
    <Filter
    change={changeFilter}
    settings={filterSettings}
    />

      
    </div>
  );
}

export default App;
