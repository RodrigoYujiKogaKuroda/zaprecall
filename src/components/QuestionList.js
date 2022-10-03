import { useState } from "react";

import CARDS from "./Cards";
import Card from "./Card";

export default function QuestionList() {

    const [isEnabled, setIsEnabled] = useState([]);

    function turnToQuestion(index) {

    }

    function turnToAnswer(index) {

    }

    return (
        <>
        {CARDS.map((card, index) =>
            <Card
                key={index}
                isEnabled={isEnabled[index]}
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