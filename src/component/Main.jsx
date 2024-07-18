import React, { useState, useEffect } from 'react';
import Trivia from './Trivia';

function Main() {
  const moneypyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 1000" },
    { id: 7, amount: "$ 2000" },
    { id: 8, amount: "$ 4000" },
    { id: 9, amount: "$ 8000" },
    { id: 10, amount: "$ 16000" },
    { id: 11, amount: "$ 32000" },
    { id: 12, amount: "$ 64000" },
    { id: 13, amount: "$ 128000" },
    { id: 14, amount: "$ 256000" },
    { id: 15, amount: "$ 500000" },
  ];

  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(30);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    if (time === 0) {
      setStop(true);
    }
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(moneypyramid.find((m) => m.id === questionNumber - 1).amount);
    }
  }, [questionNumber, moneypyramid]);

  return (
    <div className='app'>
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">{time}</div>
            </div>
            <div className="bottom">
              <Trivia
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
                setTime={setTime}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneypyramid.map((m) => (
            <li
              key={m.id}
              className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}
            >
              <span className='moneyListItemNumber'>{m.id}</span>
              <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
