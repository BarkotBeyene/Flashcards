/*import React from 'react';

const Card = ({ card, isQuestion, flipCard }) => {
  return (
    <div className="card" onClick={flipCard}>
      {isQuestion ? <h2>{card.question}</h2> : <h2>{card.answer}</h2>}
    </div>
  );
};

export default Card;*/

import React, { useState } from "react";
import "./Card.css";


const Card = ({ text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


  const handleFlipClick = () => {
    setIsFlipped(true);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCorrect(event.target.guess.value === text);
  };


  const handleNextClick = () => {
    setIsFlipped(false);
    setIsCorrect(false);
  };


  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-front" onClick={handleFlipClick}>
        {isFlipped ? text : "Tap to flip"}
      </div>
      <div className="card-back">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" name="guess" placeholder="Enter your guess" />
            <button type="submit">Submit</button>
          </div>
        </form>
        {isCorrect ? (
          <div className="feedback correct">Correct!</div>
        ) : (
          isCorrect !== false && <div className="feedback incorrect">Incorrect!</div>
        )}
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};


export default Card;
