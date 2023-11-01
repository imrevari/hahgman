import React from "react";
import styled from 'styled-components'

const Letter = ({letter, disabled}) => {

    const Button = styled.button`
    background-color: transparent;
    border: 2px solid black;
    margin: 2px;
    width: 24px;
  `;

    return (<>
        <Button
            disabled={disabled}
        >{letter}</Button>
    </>)

}

export default Letter;