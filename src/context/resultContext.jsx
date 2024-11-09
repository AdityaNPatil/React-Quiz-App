import { createContext, useState } from "react";

export const resultContext = createContext(null);

export function ResultContextProvider({children}){
    // state to store boolean to show result page or not
    const [showResult, setShowResult] = useState(false)

    // state to store result(score, no. of correctAnswers, no. of wrongAnswers)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    return <resultContext.Provider value={{showResult , setShowResult , result , setResult}}>{children}</resultContext.Provider>
}

