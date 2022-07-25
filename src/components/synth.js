import './synth.css'
const Synth = () => {
    const check = "This page is rendering correctly";

    const audioContext = new AudioContext(); // Lets us use Audio API
    let osc = audioContext.createOscillator(); // creates osc
    osc.type = 'triangle'; // sets wave
    osc.connect(audioContext.destination); //destination is speakers by default
        if (audioContext.state === 'suspended') {
            audioContext.resume()
        }

     
  
     
    

    return(
        <div>
        <h1>{check}</h1>
        <button onClick={(e) => { }}>Play</button>
        
    
        </div>
    );

};

export default Synth;