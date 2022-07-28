import './synth.css'
// import { useState } from 'react';
const Synth = () => {

    const check = "This page is rendering correctly";
    const audioContext = new AudioContext(); // lets us use Audio API
    const osc = audioContext.createOscillator() // creates osc
    let volume  = audioContext.createGain()
    osc.connect(volume).connect(audioContext.destination) // set to dest to speakers
    
  
        function trianglePlay() {  
        osc.type = 'triangle';
        osc.frequency.value = 80;
        osc.start();
        osc.stop(audioContext.currentTime + 2)   
    }
    function sawPlay() {
        osc.type = 'square';
        osc.frequency.value = 80;
        osc.start();
        osc.stop(audioContext.currentTime + 2)
    }
 
 
    return(
        <div>

        <h1>{check}</h1>
        <button onClick={trianglePlay}>triangle</button>
        <button onClick={sawPlay}>square</button> 
        <input  type="range" id="volume" name="volume" min="0" max="10"></input>
    


    
        </div>
    );

};

export default Synth;