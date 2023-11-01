import React, { useState, useMemo, useEffect } from "react";
import LIST_OF_WORDS from './Game/words.json'
import Game from "./Game/Game";


const MainPage = ({selectedLenght}) => {

    const WORD_TO_GUESS = 'WORD_TO_GUESS'


    const selectedWord = (selectedLenght) => {
      const mapOfWords = new Map();
      LIST_OF_WORDS.forEach(element => {
          if (mapOfWords.get(element.length)){
              const array = mapOfWords.get(element.length)
              mapOfWords.set(element.length, [...array, element])
          }else{
              mapOfWords.set(element.length, [element])
          }
      });
      const properArray = [...mapOfWords.get(parseInt(selectedLenght))];
      return properArray[Math.floor(Math.random()*properArray.length)];
    }

     const [wordToGuess, setWordToGuess] = useState('')

      useEffect(() => {
        const word = window.localStorage.getItem(WORD_TO_GUESS);
        if(word) {
            setWordToGuess(word)
        }else{
            const newWord = selectedWord(selectedLenght)
            window.localStorage.setItem(WORD_TO_GUESS, newWord)
            setWordToGuess(newWord)
        }
      }, []);

      const getNewWord = () => {
            const word = selectedWord(selectedLenght)
            setWordToGuess(word)
            window.localStorage.setItem(WORD_TO_GUESS, word)
      }

    return(<>
        <div>
            <button>Instructions</button>
            <Game wordToGuess={wordToGuess} restartGame={getNewWord}/>
        </div>
        
    
    </>)


}

export default MainPage;