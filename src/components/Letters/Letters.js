import React, { useMemo } from "react";
import Letter from "./Letter";
import './Letters.css'


const Letters = ({selected, onSelect}) => {

const TITLE = "Play with words"
const alphabet = useMemo(() => {
    const alphabetInt = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alphabetInt.map((x) => String.fromCharCode(x));
    return alphabet.map ((letter) => ({letter: letter, disabled: selected.includes(letter)}))
}, [selected])

return (<>
    <div className="maindiv">
        <p className="paragraph"><b>{TITLE}</b></p>
        <div className="flexdiv">
            {alphabet.map(({letter, disabled}, index) => <Letter
                                        key={index}
                                        letter={letter}
                                        disabled={disabled}
                                        onSelect={onSelect} />)}
        </div>
    </div>
</>)
}

export default Letters;