import React, { useState } from "react";
import './App.css';
import MainPage from "./components/MainPage";




function App() {

  const [selectedLenght, setSelectedLenght] = useState()
  const [input, setInput] = useState(10)


  return (
    <div className="App">


        <>
          {/* {!selectedLenght && <input type="number" min={10} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={ (e) => {
            if (e.key === 'Enter') {
              setSelectedLenght(input)
            }
          }}
          value={input}
          />}
          {selectedLenght && <MainPage selectedLenght ={selectedLenght} />} */}

          <MainPage selectedLenght={10} />
        </>
      
    </div>
  );
}

export default App;
