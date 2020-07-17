import React,{useState} from 'react';
import Message from './message'
import Day from './day'
import './App.css';

function App() {

  let[count, setcount]=useState(0);
  let[ismorning, setmorning]=useState(false)


  return (
    <div className="App">

      <Message count={count} />
      <h1>
        Good{ismorning ? "Morning" : 'Night'}
      
      </h1>

      <button onClick={() => setmorning(!ismorning)}> 
        update morning
      
      </button>
      
      <br />

      <button onClick={() => setcount(count+1)}>
        update count


      </button>
    </div>
  );
}

export default App;
