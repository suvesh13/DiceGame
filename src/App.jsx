import styled from "styled-components"
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
    {
      isGameStarted ?<GamePlay /> : <StartGame flg={toggleGamePlay}/>
    }
      
    </>
  )
}

export default App;

