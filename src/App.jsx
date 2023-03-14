import React, { useState } from "react";
import "./App.css";

const CARD_PAIRS = [
  { question: "What is the difference between a stock and a bond?", answer: "Stock represents ownership in a company, while a bond represents debt owed to the bondholder by an issuer." },
  { question: "What is a derivative?", answer: "A financial contract whose value is based on the value of an underlying asset, such as a stock or commodity." },
  { question: "What is the time value of money?", answer: "The idea that money is worth more today than the same amount in the future, due to its potential earning capacity." },
  { question: "What is diversification?", answer: "The practice of investing in a variety of assets to reduce risk." },
  { question: "What is a mutual fund?", answer: "An investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities." },
  { question: "What is the difference between a traditional IRA and a Roth IRA?", answer: "Contributions to a traditional IRA are tax-deductible and grow tax-free until retirement, while contributions to a Roth IRA are not tax-deductible but withdrawals are tax-free in retirement." },
  { question: "What is a 401(k)?", answer: "A retirement savings plan sponsored by an employer, where employees can contribute pre-tax income and the employer may match a portion of the contributions." },
  { question: "What is the difference between a credit score and a credit report?", answer: "A credit report is a detailed summary of an individual's credit history, while a credit score is a numerical representation of that history, ranging from 300 to 850." },
  { question: "What is compound interest?", answer: "Interest that is calculated not only on the initial principal but also on any accumulated interest from previous periods." },
  { question: "What is a bear market?", answer: "A market condition where stock prices are falling and investor sentiment is pessimistic." },
  { question: "What is a bull market?", answer: "A market condition where stock prices are rising and investor sentiment is optimistic." },
  { question: "What is the difference between a stock and a mutual fund?", answer: "Stock represents ownership in a single company, while a mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities." },
  { question: "What is a bond rating?", answer: "A grade given to a bond based on the creditworthiness of the issuer and the likelihood that the bond will be repaid in full and on time." },
  { question: "What is a P/E ratio?", answer: "The price-to-earnings ratio is a valuation ratio that compares a company's stock price to its earnings per share." },
  { question: "What is the difference between a market order and a limit order?", answer: "A market order is an order to buy or sell a stock at the best available price, while a limit order is an order to buy or sell a stock at a specific price or better." },
  { question: "What is a tax-advantaged savings plan designed to encourage saving for future education costs, typically for college or university called?", answer: "529 plan"},
  { question: "What is a margin call?", answer: "A demand by a broker for an investor to deposit additional funds to meet the minimum margin requirements needed to maintain an open position in the market." },
  { question: "What is insider trading?", answer: "The illegal practice of trading securities based on material, nonpublic information." },
  { question: "What is a short sale?", answer: "A trading strategy where an investor borrows shares of a stock and immediately sells them, with the hope of buying them back at a lower price to return to the lender, thereby profiting from the difference." },
  { question: "What is a credit default swap?", answer: "A type of financial derivative that allows investors to protect themselves against the risk of default on a particular bond or loan." },
  { question: "What is a junk bond?", answer: "A high-risk, high-yield bond issued by a company or government with a low credit rating." },
 ]; 

/*function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = CARD_PAIRS[currentCardIndex];

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    setCurrentCardIndex(Math.floor(Math.random() * CARD_PAIRS.length));
    setShowAnswer(false);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + flashcardData.length) % flashcardData.length;
    setCurrentIndex(prevIndex);
    setShowAnswer(false);
  };

  return (~
    <div className="container">
      <h1>Understand Finance</h1>
      <h1>Develop your Finance knowledge with these common terms</h1>
      <h2>There are {CARD_PAIRS.length} questions in total</h2>
      <div className="card" onClick={handleCardClick}>
        <div className="card-content">
          <h2>{showAnswer ? currentCard.answer : currentCard.question}</h2>
        </div>
      </div>
      <div className = "button-container">
      <button onClick={handlePrevClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default App;*/


function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);


  const currentCard = CARD_PAIRS[currentCardIndex];


  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };


  const handleNextClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % CARD_PAIRS.length);
    setShowAnswer(false);
    setUserGuess("");
    setIsCorrect(false);
  };


  const handlePrevClick = () => {
    setCurrentCardIndex((currentCardIndex - 1 + CARD_PAIRS.length) % CARD_PAIRS.length);
    setShowAnswer(false);
    setUserGuess("");
    setIsCorrect(false);
  };


  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCorrect(userGuess.toLowerCase() === currentCard.answer.toLowerCase());
  };
  
  return (
  <div className="App">
  <h1>Understand Finance</h1>
  <div className="card-container">
  <div className="card" onClick={handleCardClick}>
  <div className="card-question">{currentCard.question}</div>
  {showAnswer && (
  <div className="card-answer">{currentCard.answer}</div>
  )}
  </div>
  </div>
  <form onSubmit={handleSubmit}>
  <label>
  Guess:
  <input type="text" value={userGuess} onChange={handleInputChange} />
  </label>
  <button type="submit">Submit</button>
  </form>
  {isCorrect && <p>Correct!</p>}
  {userGuess && !isCorrect && <p>Incorrect. Try again.</p>}
  <button onClick={handlePrevClick}>Previous</button>
  <button onClick={handleNextClick}>Next</button>
  </div>
  );
  }
  
  export default App;
