import React, { useState } from 'react';
import defaultAnswers from './answers.json';  
import { choice } from './random';

function EightBall({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick() {
    const newAnswer = choice(answers); 
    setAnswer(newAnswer);  
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color, color: 'white', padding: '20px', borderRadius: '50%', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', cursor: 'pointer', userSelect: 'none' }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

export default EightBall;
