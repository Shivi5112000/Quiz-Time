import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizScore from "./QuizScore";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(0);
    } else {
      setShowScore(true);
    }
  };

  const updateScore = () => {
    if (selected === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setSelected(0);
    setScore(0);
  };

  return (
    <div>
      <p className="heading-txt">Quiz Time</p>
      <div className="container">
        {showScore ? (
          <QuizScore
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-txt">
                  {currentQuestion + 1}. {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button // className="option-btn"
                    className={`option-btn ${
                      selected === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setSelected(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
