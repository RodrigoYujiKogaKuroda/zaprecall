import { useState, useEffect } from "react";

import CARDS from "./Cards";
import Card from "./Card";

export default function QuestionList({
    isEnabled,
    setIsEnabled,
    buttonIsDisabled,
    setButtonIsDisabled,
    turnButtonIsDisabled,
    setTurnButtonIsDisabled,
    setAnswerButtonIsDisabled,
    color
}) {

    const [isAnswered, setIsAnswered] = useState([]);

    useEffect(() => {
        const enabledArray = [];
        const answeredArray = [];
        for (let i = 0; i < CARDS.length; i++) {
            enabledArray.push(true);
            answeredArray.push(false);
        }
        setIsEnabled(enabledArray);
        setIsAnswered(answeredArray);
    }, []);
    
    function turnToQuestion(index) {
        setButtonIsDisabled(true);
        const newIsEnabled = isEnabled;
        const newIsAnswered = isAnswered;
        for (let i = 0; i < isEnabled.length; i++) {
            if (i === index) {
                newIsEnabled[i] = false;
                newIsAnswered[i] = true;
            }
        }
        setIsEnabled(newIsEnabled);
        setIsAnswered(newIsAnswered);
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
                isAnswered={isAnswered[index]}
                buttonIsDisabled={buttonIsDisabled}
                turnButtonIsDisabled={turnButtonIsDisabled}
                color={color}
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