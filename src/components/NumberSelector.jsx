import React, { useState } from 'react'
import styled from 'styled-components'
import RollDice from './RollDice';

function NumberSelector({setError,error,selectedNumber,setSelectedNUmber}) {
    const arr = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=>{
        setSelectedNUmber(value)
        setError("");
    }
  return (
    <NumberSelelctorContainer>
        <p className='errors'>{error}</p>
        <div className='flex'>
            {arr.map((value,i)=>(
                <Box 
                    isSelected={value===selectedNumber}
                    key={i}
                    onClick={()=>numberSelectorHandler(value)}
                >
                    {value}
                </Box>
            ))}
        </div>
        <p>Select Number</p>

        
        
    </NumberSelelctorContainer>
  )
}

export default NumberSelector

const NumberSelelctorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-weight:700px;
        font-size:24px;
    }
    .errors{
        color: red;
    }
    
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isSelected ? "black":"white"};
    color: ${(prop)=> prop.isSelected ? "white": "black"};
`;