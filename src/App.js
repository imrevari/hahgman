import React, { useMemo } from "react";
import './App.css';
import Game from './components/Game/Game';

import LIST_OF_WORDS from './components/Game/words.json'



function App() {


  const selectedLenght = 10

  const selectedWord = useMemo(() => {
    const mapOfWords = new Map();
    LIST_OF_WORDS.forEach(element => {
        if (mapOfWords.get(element.length)){
            const array = mapOfWords.get(element.length)
            mapOfWords.set(element.length, [...array, element])
        }else{
            mapOfWords.set(element.length, [element])
        }
    });
    const properArray = [...mapOfWords.get(selectedLenght)];
    return properArray[Math.floor(Math.random()*properArray.length)];
   }, [selectedLenght])

  return (
    <div className="App">


        <>
        
          <Game wordToGuess={selectedWord}/>
        </>
      
    </div>
  );
}

export default App;
