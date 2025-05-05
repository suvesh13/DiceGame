import styled from "styled-components";

export const Button = styled.button`

padding: 10px 18px;
min-width: 220px;
background:black;
border-radius:5px;
color: white;
border: none;
font-size: 16px;
border: 1px solid black;
cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
    background-color: #fbf7f7;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}
`
export const Outline = styled(Button)`
    background-color:white;
    color: black;
    border: 1px solid black;
    &:hover{
    background-color:black;
    border: 1px solid transparent;
    color: white;
}
`