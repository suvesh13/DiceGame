import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, Outline } from '../styled/Button'
import Roles from './Roles'

function GamePlay() {
  const [score,setScore] = useState(0);
  const [currentDice,setCurrentDice] = useState(1);
  const [selectedNumber,setSelectedNUmber] = useState();
  const [error,setError] = useState(false);

  const [showRole,setRoles] = useState(false);

  const roleHandler = ()=>{
    setRoles((pre)=>!pre);
    console.log(showRole);

  }
  const generateRandomNumber = (min,max)=>{
    return  Math.floor(Math.random() * (max-min) + min);
  }

  const roleDice = ()=>{
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice(randomNumber);

    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }

    setError("");

    if(selectedNumber===randomNumber){
      setScore(pre => pre+randomNumber);
    }else{
      setScore(pre => pre-2);
    }
    setSelectedNUmber(undefined);
  }


  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNUmber={setSelectedNUmber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        roleDice={roleDice}
      />

      <div className="btns">
        <Outline onClick={()=>setScore(0)}>Reset</Outline>
        <Button onClick={roleHandler}>Show Roles</Button>
      </div>
      {showRole ? <Roles /> : ""}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* max-width: 20px; */
      align-items: center;
      gap: 10px;
    }
`