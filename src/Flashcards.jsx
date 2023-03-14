import React, { useState } from "react";
import Card from "./Card";
import "./FlashCards.css";

const FlashCards = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.toLowerCase() === cards[currentCardIndex].answer.toLowerCase()) {
      setShowAnswer(true);
      setCorrectAnswer(true);
    } else {
      setShowAnswer(true);
      setCorrectAnswer(false);
    }
  };

  const handleNextClick = () => {
    setCurrentCardIndex((index) => (index + 1) % cards.length);
    setShowAnswer(false);
    setGuess("");
    setCorrectAnswer(null);
  };

  const handlePrevClick = () => {
    setCurrentCardIndex((index) => {
      if (index === 0) {
        return cards.length - 1;
      } else {
        return index - 1;
      }
    });
    setShowAnswer(false);
    setGuess("");
    setCorrectAnswer(null);
  };

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">{cards[currentCardIndex].question}</h1>
      <Card
        text={cards[currentCardIndex].answer}
        showAnswer={showAnswer}
        correctAnswer={correctAnswer}
      />
      <form className="guess-form" onSubmit={handleGuessSubmit}>
        <input
          type="text"
          className="guess-input"
          placeholder="Enter your guess"
          value={guess}
          onChange={handleGuessChange}
        />
        <button type="submit" className="guess-button">
          Submit
        </button>
      </form>
      <div className="button-container">
        <button className="button" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashCards;
