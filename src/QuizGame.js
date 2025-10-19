import React, { useState, useEffect } from 'react';
import quizQuestions from './quizData';
import './QuizGame.css'; // We'll create this next

const QuizGame = ({ onGoHome }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Shuffle questions and pick 5
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setFeedback('');
  };

  const handleOptionClick = (option) => {
    if (selectedOption === null) { // Only allow selection if not already selected
      setSelectedOption(option);
      if (option === questions[currentQuestionIndex].answer) {
        setScore((prevScore) => prevScore + 1);
        setFeedback('答對了！');
      } else {
        setFeedback(`答錯了！正確答案是：${questions[currentQuestionIndex].answer}`);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setFeedback('');
    } else {
      setShowResult(true);
    }
  };

  const shareToLine = () => {
    const text = `我在家庭小遊戲中獲得了 ${score} 分！快來挑戰！`;
    const url = encodeURIComponent(window.location.href); // Share current page URL
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${encodeURIComponent(text)}`, '_blank');
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <h3>載入題目中...</h3>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div className="quiz-card">
          <h3>家庭小遊戲</h3>
          <p className="question-number">
            第 {currentQuestionIndex + 1} 題 / 共 {questions.length} 題
          </p>
          <p className="question-text">{currentQuestion.question}</p>
          <div className="options-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option
                    ? option === currentQuestion.answer
                      ? 'correct'
                      : 'incorrect'
                    : ''
                } ${selectedOption !== null && option === currentQuestion.answer ? 'correct-answer' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <p className="feedback-message">{feedback}</p>}
          <button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="next-button"
          >
            {currentQuestionIndex < questions.length - 1 ? '下一題' : '看結果'}
          </button>
        </div>
      ) : (
        <div className="quiz-result-card">
          <h3>遊戲結束！</h3>
          <p>你答對了 {score} 題，總分 {questions.length} 分。</p>
          <div className="result-actions">
            <button onClick={onGoHome} className="action-button">回首頁</button>
            <button onClick={startNewGame} className="action-button">再玩一次</button>
            <button onClick={shareToLine} className="action-button share-button">分享到 Line</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
