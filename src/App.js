import React, {useState, useEffect} from 'react';
import ClockItem from './component/ClockItem/ClockItem';
import AddTimer from './component/AddTimer/AddTimer';
import timezones from './timezone';

import './App.css';

function App() {
  let [timer, setTimer] = useState([]);

  //get timezone in localStorage
  useEffect(() => {
    let timer = getLocalStorage();
    if (timer) {
      setTimer(timer);
    }
  },[])

  // add timezone
  const onTimer =  (index) => {
    let newTimer = [
      ...timer, timezones[index]     
    ]
    setTimer(newTimer);
    setLocalStorage(newTimer);
  }

  //delete timezone
  const onDeleteTimer = (index) => {
    let newTimer = [
      ...timer.slice(0, index),
      ...timer.slice(index + 1)
    ]
    setTimer(newTimer);
    setLocalStorage(newTimer);
  }

  return (
    <div className="App">
      <AddTimer onTimer={onTimer}/>
      {
        timer.map((timezone, index) =>{
        return <ClockItem timezone={timezone} onDeleteTimer={onDeleteTimer} key={index} index={index}/>})
      }
    </div>
  );
}

//get timezone array in localStorage
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('timer'));
}

//set timezone array to localStorage
function setLocalStorage(setTime) {
  let strTimer = JSON.stringify(setTime);
  localStorage.setItem('timer', strTimer);
}

export default App;
