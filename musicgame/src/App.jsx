import React, { useState, useEffect } from "react";
import Title from "./Title";
import NavBar from "./NavBar";
import Score from "./Score";
import Game from "./Game";
import Infos from "./Infos";


export function App() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(0);

  useEffect(() => {
    setScore(10);
    setMessage("Bienvenue");
  }, []);
  
  return (
    <div>
      <Title />
      <NavBar />
      <Score score={score} />
      <Game 
                score={score} 
                onScoreChange={setScore} 
            />
      <Infos 
                message={message}
                score={score}
      />
    </div>
  );
}
