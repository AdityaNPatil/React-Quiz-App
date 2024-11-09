import { useContext } from 'react';
import React from 'react'
import { resultContext } from '../context/resultContext';

const Result = ({ questions }) => {

  // get result from context
  const { result } = useContext(resultContext);

  // display result
  return (
    <main className='quizContainer'>
      <div className="result">
        <h3>Result</h3>
        <p>
          Total Question: <span>{questions.length}</span>
        </p>
        <p>
          Total Score:<span> {result.score}</span>
        </p>
        <p>
          Correct Answers:<span> {result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers:<span> {result.wrongAnswers}</span>
        </p>
      </div>
    </main>
  )
}

export default Result
