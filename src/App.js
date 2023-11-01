import React, { useState, useEffect } from "react";
import './App.css';
import MainPage from "./components/MainPage";




function App() {

  const [selectedLenght, setSelectedLenght] = useState()
  const [input, setInput] = useState(10)

  const WORD_TO_GUESS = 'WORD_TO_GUESS'

  const word = window.localStorage.getItem(WORD_TO_GUESS);

  return (
    <div className="App">


        <>
          {/* {word || selectedLenght ?
            <MainPage selectedLenght ={selectedLenght} /> :
          <input type="number" min={10} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={ (e) => {
            if (e.key === 'Enter') {
              setSelectedLenght(input)
            }
          }}
          value={input} /> } */}
          

          <MainPage selectedLenght={10} />
        </>
      
    </div>
  );
}

export default App;
