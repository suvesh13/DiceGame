import React from 'react'
import styled from 'styled-components'

function Roles() {
  return (
    <RolesBox>
      <div className='headings'>
        <h1>How to play dice game</h1>
      </div>
      <div className='ptag'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RolesBox>
  )
}

export default Roles

const RolesBox = styled.div`
     width: 794px;
    padding: 20px;
    background-color: #FBF1F1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto; /* Add this to center */
    border-radius: 8px; /* (Optional) to look a bit better */
    .headings{
        font-weight:700px;
        font-size:24px;
        letter-spacing: 0%;
    }
    .ptag{
        width: 754px;
        height: 108;
        gap: 4px;
        font-size:16px;
        line-height: 100%;
    }
`