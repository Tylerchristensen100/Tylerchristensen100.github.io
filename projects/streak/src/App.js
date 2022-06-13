import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
//import {ls} from './localStorage';

const App = () => {
//get counter from localStorage
function retrieveCounter() {
  let persistentCounter = JSON.parse(localStorage.getItem('counter')) || 0;
  return persistentCounter;
}



  //  Counter is a state initialized to 0
  let [counter, setCounter] = useState(retrieveCounter())
  
  // Function is called everytime increment button is clicked
  const handleClick = () => {
    // Counter state is incremented
    setCounter(counter + 1)
    localStorage.setItem('counter', JSON.stringify(counter+1));
  }
  
  function Clear() {
  setCounter(0);
  localStorage.setItem('counter', JSON.stringify(0));
  }
 
  
  return (
    <>
    <div className="header"><h1>Spiritual Streak</h1></div>
    <div className="container">
      <div className="row">
          <div className="counter col-xs-12">{counter}</div>
        </div>
        <div className="button row">
          <div className="col-xs-12 padding-top-60">
            <button className="button increment" onClick={handleClick}>ADD</button>
          </div>

            <div className="col-xs-12 padding-top-80">
              <button className="button reset" onClick={Clear}>Reset</button>
            </div>
        </div>
      </div>
    </>
  )
}
  
export default App
