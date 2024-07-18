import React, { useEffect, useState } from 'react';

const Trivia = ({ questionNumber, setQuestionNumber, setStop, setTime }) => {
  const data = [
    { id: 1, 
      question: "What is this question?",
      answers: [
       { text: "Option 1", correct: false },
       { text: "Option 2", correct: true },
       { text: "Option 3", correct: false }, 
       { text: "Option 4", correct: false }] },

    { id: 2, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false },
         { text: "Option 2", correct: true }, 
         { text: "Option 3", correct: false },
         { text: "Option 4", correct: false }] },

    { id: 3, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false },
        { text: "Option 2", correct: true },
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 4, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 5, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 6, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 7, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 8, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 9, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 10, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 11, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },
      
    { id: 12, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 13, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 14, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },

    { id: 15, question: "What is this question?", 
      answers: [
        { text: "Option 1", correct: false }, 
        { text: "Option 2", correct: true }, 
        { text: "Option 3", correct: false }, 
        { text: "Option 4", correct: false }] },
        
     ];

  const [question, setQuestion] = useState(null);
  const [state, setState] = useState(false);
  const [selectedAnswer, setSelectedAnswer ] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber + 1]);
    setState(false);
  }, [questionNumber]);
  
  

  const handleClick = (answer,index) => {
      setState(!state)
      setSelectedAnswer(index)

    setTimeout(() => {
      if (answer.correct) {
        setQuestionNumber(next => next + 1);
        setTime(30);        
      } 
      else {
        alert("Game Over! Incorrect answers.");
        setStop(true); 
        setTimeout(()=>{
        window.location.href = "/"},3000)
      }
    }, 1000);
  };
  
  return (
    <div className="trivia h-full flex flex-col items-center justify-around">
      <div className="question-container w-4/5 bg-gradient-to-b from-[#100241] to-black border-2 border-white text-center p-4 rounded-md text-xl mb-12.5">
        {question?.question}
      </div>
      <div className="answers-container w-full flex items-center justify-center flex-wrap">

        {question?.answers.map((answer,index) => (
          <div
            key={answer.text}
            
            className={`answer w-2/5 p-4 m-2 text-center border border-white rounded-2xl font-light cursor-pointer
               ${answer?.correct && state ?  "bg-green-500" :  "bg-[#0e0124]"} `
           }
            
           
           


            onClick={() => handleClick(answer,index)}

            
          >
            {answer.text}
          </div>
          

        ))}
        
      </div>
    </div>
  );
};

export default Trivia;