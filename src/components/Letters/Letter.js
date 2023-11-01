import React from "react";
import styled from 'styled-components'

const Letter = ({letter, disabled, onSelect}) => {

    const Button = styled.button`
    background-color: transparent;
    border: 2px solid black;
    margin: 2px;
    width: 24px;
  `;

    return (<>
        <Button
            onClick={() => onSelect(letter)}
            disabled={disabled}
        >{letter}</Button>
    </>)

}

export default Letter;