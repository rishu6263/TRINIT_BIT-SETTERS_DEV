import React, { useState, useEffect } from 'react';

const TestScreen = () => {
  const [questions, setQuestions] = useState([]); // array of questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [timer, setTimer] = useState(180); // 3 minutes timer
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

  // Dummy data for questions
  useEffect(() => {
    const dummyQuestions = [
      {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
      },
      // Add more questions here
    ];
    setQuestions(dummyQuestions);
  }, []);

  // Timer countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Cleanup
    return () => clearInterval(countdown);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if an option is selected
    if (selectedOption !== '') {
      setAttemptedQuestions((prevAttempts) => prevAttempts + 1);
      setSelectedOption('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // End of questions
        console.log('End of questions');
      }
    } else {
      alert('Please select an option');
    }
  };

  const handleSubmit = () => {
    // Handle submission
    console.log('Submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-semibold">Question {currentQuestionIndex + 1}</p>
          <p>{attemptedQuestions} attempted | {questions.length - attemptedQuestions} left</p>
        </div>
        <div>
          <p>Time Left: {Math.floor(timer / 60)}:{timer % 60}</p>
        </div>
      </div>
      <div className="border border-gray-300 rounded p-4 mb-4">
        <p className="mb-4">{questions[currentQuestionIndex]?.question}</p>
        <div>
          {questions[currentQuestionIndex]?.options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                id={`option${index}`}
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label htmlFor={`option${index}`} className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handleNextQuestion} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Next Question</button>
        <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Submit</button>
      </div>
    </div>
  );
};

export default TestScreen;