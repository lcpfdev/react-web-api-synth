import './synth.css'
const Synth = () => {
    const check = "This page is rendering correctly";
    const audioContext = new AudioContext(); // lets us use Audio API
    const osc = audioContext.createOscillator() // creates osc
    osc.connect(audioContext.destination) // set to dest to speakers

        function trianglePlay() {
           
            osc.type = 'triangle'; 
        osc.start();
        osc.stop(audioContext.currentTime + 1)
    
     
       
    }
    function sawPlay() {
        osc.type = 'square'; 
        osc.start();
        osc.stop(audioContext.currentTime + 1)
        
 
    }




    return(
        
        <div>
        <h1>{check}</h1>
        <button onClick={trianglePlay}>triangle</button>
        <button onClick={sawPlay}>square</button>
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        </div>
    );

};

export default Synth;