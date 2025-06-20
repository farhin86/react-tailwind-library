import { useEffect, useState } from "react";

type FlashCard = {
    question: string;
    answer: string;
    sequence: number;
    enableButtons: ()=>void;
}

export const FlashCard = ({question, answer,sequence, enableButtons}: FlashCard) => {
    const [showAnswer, setShowAnswer] = useState(false);
    useEffect(()=>{
        setShowAnswer(false);
    },[question])
    
    return (
        <div className="border-black border size-40 m-2 text-center cursor-pointer" 
        onClick={()=> {
            setShowAnswer(!showAnswer)
            enableButtons();
        }}>
            {!showAnswer ? 
                <>
                    <h4 className="bg-gray-300 text-black p-2">Question: {sequence+1}</h4>
                    <div className="mt-3">{question}</div>
                </> :
                <div className="bg-orange-200 h-full">
                    <h4 className="bg-gray-300 text-black p-2">Answer:{sequence+1}</h4>
                    <div className="mt-3">{answer}</div>
                </div>
            }
        </div>
    )
}