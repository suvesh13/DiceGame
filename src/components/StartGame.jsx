import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button.js';

function StartGame({flg}) {
    const clickButton = ()=>{
        console.log("clicked");
        
        flg()
    } 
  return (
    <Container>
        <div><img src="./images/Alldice.png"  /></div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={clickButton}>Play Game</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    min-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`



