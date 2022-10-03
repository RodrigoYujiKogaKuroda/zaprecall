import { useState, useEffect } from "react";

import CARDS from "./Cards";
import Card from "./Card";

export default function QuestionList({color, setAnswerButtonIsDisabled}) {

    const [isEnabled, setIsEnabled] = useState([]);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
    const [turnButtonIsDisabled, setTurnButtonIsDisabled] = useState(false);

    useEffect(() => {
        const enabledArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            enabledArray.push(true);
        }
        setIsEnabled(enabledArray);
    }, []);
    
    function turnToQuestion(index) {
        setButtonIsDisabled(true);
        const newIsEnabled = isEnabled;
        for (let i = 0; i < isEnabled.length; i++) {
            if (i === index) {
                newIsEnabled[i] = false;
            }
        }
        setIsEnabled(newIsEnabled);
    }

    function turnToAnswer(setCardText, answer) {
        setCardText(answer);
        setTurnButtonIsDisabled(true);
        setAnswerButtonIsDisabled(false);
    }

    return (
        <>
        {CARDS.map((card, index) =>
            <Card
                key={index}
                isEnabled={isEnabled[index]}
                buttonIsDisabled={buttonIsDisabled}
                turnButtonIsDisabled={turnButtonIsDisabled}
                cardNumber={index}
                question={card.question}
                answer={card.answer}
                turnToQuestion={turnToQuestion}
                turnToAnswer={turnToAnswer}
            />
        )}
        </>
    );

}