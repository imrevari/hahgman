import React, { useState, useMemo } from "react";
import './Game.css'
import WordToGuess from '../WordToGuess/WordToGuess'
import Letters from "../Letters/Letters";

const Game = ({wordToGuess}) => {

    const GAME_TITLE = "The Hangman"
    const SVG_PIC = [
        <path d="M1,11 h8" />,
        <path d="M9,11 v-10" />,
        <path d="M9,1 h-4" />,
        <path d="M5,1 v2" />,
        <circle cx="5" cy="4" r="1" />,
        <path d="M5,5 v3" />,
        <path d="M5,5 l-2,2" />,
        <path d="M5,5 l2,2" />,
        <path d="M5,8 l-2,2" />,
        <path d="M5,8 l2,2" />,
    ]

    const [usedLetters, setUsedLetters] = useState([])

    const selectLetter = (letter) => {
        setUsedLetters(prevState => [...prevState, letter])
    }

    const unguessedLetters = useMemo(() => {
        const unguessedLetters = [...usedLetters]
        console.log(unguessedLetters)
        console.log(wordToGuess)
        return unguessedLetters.filter((letter) => !(wordToGuess.toUpperCase().includes(letter)))
    }, [wordToGuess, usedLetters])

    console.log(unguessedLetters)

    return(<>
        <div className="parentdiv">
            <div className="leftdiv">
                <div className="picdiv">
                    <svg viewBox="0 0 10 12">
                        {SVG_PIC.map((e, index) => {if(index < unguessedLetters.length) return e })}
                    </svg>
                </div>
            </div>
            <div className="rightdiv">
                <h1>{GAME_TITLE}</h1>
                {/* you lost you won */}
                <WordToGuess />
                <h2>{wordToGuess}</h2>
                <Letters selected={usedLetters} onSelect={selectLetter}/>
                <div>
                    <button>end game</button>
                    <button>start new game</button>
                </div>
            </div>
        </div>



        
    </>)
}

export default Game;