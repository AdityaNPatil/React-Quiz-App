import React, { useContext } from 'react'

import "./App.css"

// components 
import Question from './components/Question'
import Result from './components/Result'

// import question bank
import { quiz } from '../data/QuestionBank'

// context 
import { resultContext } from './context/resultContext'


const App = () => {
    // store questions array from quiz object in questions array
    const questions = quiz.questions;

    // use context --
    const { showResult , result} = useContext(resultContext);

    return (
        <>
        {/* if showResult is false show Question Page else show Result page */}
            {!showResult ?
                <Question questions={questions} />
            :
                <Result questions={questions}/>
            }
        </>
    )
}

export default App
