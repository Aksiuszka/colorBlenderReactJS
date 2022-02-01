import React, {useState, useEffect, useRef} from 'react'
import Header from './Components/Header/Header';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faTimes } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const color = useRef(`rgb(${red},${green},${blue})`);


  useEffect(()=>{
    color.current = `rgb(${red},${green},${blue})`;
  })

  const makeOpaque = () =>{
   setOpacity(opacity-0.1)
  }
  const makeRed = () =>{
    setRed(red+20)
   }
   const makeBlue = () =>{
    setBlue(blue+20)
   }
   const makeGreen = () =>{
    setGreen(green+20)
   }
   const makeBlack = () =>{
    setGreen(green-20)
    setBlue(blue-20)
    setRed(red-20)
   }
   const makeWhite = () =>{
    setGreen(green+20)
    setBlue(blue+20)
    setRed(red+20)
   }
   const reset = () =>{
    setGreen(0)
    setBlue(0)
    setRed(0)
    setOpacity(1)
   }
  

  return (
    <div className="App">
      <div className="boxContainer">
        <div className="header">
          <Header/>
        </div>
        <div className="canvasContainer">
          <div className="canvasContainerMain">
        <div className="buttonContainer">
        <button className="btn" id="red" onClick={makeRed}><FontAwesomeIcon icon={faCircleNotch} /></button>
        <button className="btn" id="blue" onClick={makeBlue}><FontAwesomeIcon icon={faCircleNotch} /></button>
        <button className="btn" id="green" onClick={makeGreen}><FontAwesomeIcon icon={faCircleNotch} /></button>
        </div>
          <div className="canvas">
          <div className="color-box" style={{backgroundColor: color.current, opacity} }></div>
          </div>
            <div className="buttonContainer">
              <button className="btn" id="white" onClick={makeWhite}><FontAwesomeIcon icon={faCircleNotch} /></button>
              <button className="btn" id="black" onClick={makeBlack} ><FontAwesomeIcon icon={faCircleNotch} /></button>
                <button className="btn" id="opaque" onClick={makeOpaque}><FontAwesomeIcon icon={faCircleNotch} /></button>
                <button className="btn" id="reset" onClick={reset}><FontAwesomeIcon icon={faTimes} /></button>
                  </div>
                  </div>
                  <div className="ranger-box-container">
                  <h3 className="ranger-box-headline">color intensity</h3>
                  <div className="ranger-box">
          <input className="ranger" type="range" id="red" onChange={(e)=>{setRed(e.target.value)}} min="0" max="255" value={red}/>
          <input className="ranger" type="range" id="green" onChange={(e)=>{setGreen(e.target.value)}} min="0" max="255" value={green}/>
          <input className="ranger" type="range" id="green" onChange={(e)=>{setBlue(e.target.value)}} min="0" max="255" value={blue}/> 
          </div>
                  </div> 
                  </div>
   </div>
    </div>
  );
}

export default App;
