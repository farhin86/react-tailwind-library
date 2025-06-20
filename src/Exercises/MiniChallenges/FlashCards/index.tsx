import { useState } from "react"
import { FlashCard } from "./FlashCard"

const questionCards = [
    {qn:'What is a closure?', answer: 'closure is bla bla'} ,
    {qn:'What is Prototype?',answer: 'Prototype is bla bla'},
    {qn: 'What is Promise?', answer:'Promise is bla bla'}, 
    {qn: 'Name some hooks.', answer:'useState, useEffect...'},
    {qn: 'What is virtual DOM?', answer:'Virtual representation of real DOM'}]

export default function FlashCards() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [correctCount, setCorrectCount]= useState(0);
    const [showResult, setShowResult] = useState(false);
    const [disableButtons, setDisableButtons]= useState(true);

    function setNextQuestion() {
        if(currentCardIndex<questionCards.length-1) {
            setCurrentCardIndex(currentCardIndex+1)
        } else {
            setShowResult(true);
        }
    }

    return (
        <div className="flex flex-col items-center mt-5">
            <h2>Flashcard Quiz</h2>
                <FlashCard question={questionCards[currentCardIndex].qn}
                answer={questionCards[currentCardIndex].answer}
                sequence={currentCardIndex} enableButtons={()=> setDisableButtons(false)}/>
            <div>
                <button disabled={disableButtons} className="bg-green-400 p-2 mr-2 rounded disabled:bg-green-200" onClick={()=>{
                    setCorrectCount(correctCount+1)
                    setDisableButtons(true)
                    setNextQuestion()
                }
                }>Correct</button>
                <button disabled={disableButtons} className="bg-red-400 p-2 rounded disabled:bg-red-200" 
                onClick={()=>{
                    setNextQuestion();
                  setDisableButtons(true)}
                 }>Incorrect</button>
            </div>
            <div className="my-2">You got {correctCount} out of {questionCards.length} correct!</div>
            <button className="bg-gray-500 p-2 rounded text-white w-40" disabled={!showResult} onClick={()=> {
                setCurrentCardIndex(0);
                setCorrectCount(0);
                setShowResult(false);
            }}>Restart</button>
            {showResult && <h1>Your Score is: {correctCount}/{questionCards.length}</h1>}
        </div>
    )
}