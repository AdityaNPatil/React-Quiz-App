import React, { useState, useContext } from 'react'
import { resultContext } from '../context/resultContext'

const Question = ({ questions }) => {
    // state to store currentQuestion index from questions array
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    // state to store user selectedAnswer is correct or incorrect
    const [isCorrect, setIsCorrect] = useState('')
    // state to store user selectedAnswer Index 
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

    // context to update results using setResult and setShowResult if last question submitted
    const { setShowResult, setResult } = useContext(resultContext)

    // take each question and its corresponding choices array along with correctAnswer from each element of questions array in quiz object -- destructuring
    const { question, choices, correctAnswer } = questions[activeQuestionIndex];

    // function to move to next question and update result
    const onClickNext = () => {
        // set selected answer index to null for next question
        setSelectedAnswerIndex(null)

        // calculate score  -- if with ()=>{return isCorrect} use return else ()=>isCorrect no return
        setResult((prev) => {
            return isCorrect    // if selected answer correct
                ? {
                    ...prev, // keep previous result entries as is
                    score: prev.score + 1,  // if correct answer increase score by 1
                    correctAnswers: prev.correctAnswers + 1   // increase correctAnswers Count
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1     // increase wrongAnswers Count
                }
        })

        // make activeQuestionIndex +1 (next index in questions array) -- move to next question
        // go to next question only if not last question
        if (activeQuestionIndex !== questions.length - 1) {
            setActiveQuestionIndex((prev) => prev + 1);
        }
        else {
            setActiveQuestionIndex(0);
            setShowResult(true);    // show result for last question
        }
    }

    // function to check selected Option is correct or not , set 
    const onOptionSelect = (choice, idx) => {
        // set selected Answer index
        setSelectedAnswerIndex(idx);

        // set selectedAnswer isCorrect to true if correct else false
        if (choice === correctAnswer) {
            // console.log("Correct")
            setIsCorrect(true)
        }
        else {
            // console.log("Incorrect")
            setIsCorrect(false)
        }
    }

    // function to directly submit
    const onClickSubmit = () => {
        // calculate score  -- if with ()=>{return isCorrect} use return else ()=>isCorrect no return
        setResult((prev) => {
            return isCorrect    // if selected answer correct
                ? {
                    ...prev, // keep previous result entries as is
                    score: prev.score + 1,  // if correct answer increase score by 1
                    correctAnswers: prev.correctAnswers + 1   // increase correctAnswers Count
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1     // increase wrongAnswers Count
                }
        })

        setActiveQuestionIndex(0);
        setShowResult(true);    // show result for last question        
    }

    return (
        <div className='quizContainer'>
            <h1>Quiz</h1>
            {/* display current question number */}
            <div>
                <span className='activeQuestionNo'>{activeQuestionIndex + 1}</span>
                <span className='totalQuestions'>/{questions.length}</span>
            </div>
            {/* display current question */}
            <h2>{question}</h2>
            {/* display choices of current question */}
            <ul>
                {
                    choices.map((choice, idx) => {
                        return (
                            // onClicking each option check if chosen answer correct -- pass current selected choice with idx as parameter 
                            <li
                                onClick={() => onOptionSelect(choice, idx)}
                                key={choice}
                                className={selectedAnswerIndex === idx ? 'highlightSelectedAnswer' : null}  // highlight option selected by user
                            >
                                {choice}
                            </li>
                        )
                    })
                }
            </ul>
            {/* next question button / submit quiz button */}
            {/* disable button if no option selected */}
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {/* if last question display submit else next */}
                {activeQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
            </button>

            {/* direct submit button */}
            <button onClick={onClickSubmit}>Submit</button>

        </div>
    )
}

export default Question
