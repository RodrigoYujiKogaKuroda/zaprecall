import CARDS from "./Cards";
import Card from "./Card";

export default function QuestionList({
    color,
    cardImage,
    isEnabled,
    setIsEnabled,
    isAnswered,
    setIsAnswered,
    buttonIsDisabled,
    setButtonIsDisabled,
    turnButtonIsDisabled,
    setTurnButtonIsDisabled,
    setAnswerButtonIsDisabled
}) {
 
    function turnToQuestion(index) {
        const disabledButtons = [];
        const newIsEnabled = isEnabled;
        const newIsAnswered = isAnswered;
        for (let i = 0; i < isEnabled.length; i++) {
            disabledButtons[i] = true;
            if (i === index) {
                newIsEnabled[i] = false;
                newIsAnswered[i] = true;
            }
        }
        setButtonIsDisabled(disabledButtons);
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
                data-identifier="flashcard"
                cardNumber={index}
                color={color[index]}
                cardImage={cardImage[index]}
                isEnabled={isEnabled[index]}
                isAnswered={isAnswered[index]}
                buttonIsDisabled={buttonIsDisabled[index]}
                turnButtonIsDisabled={turnButtonIsDisabled}
                question={card.question}
                answer={card.answer}
                turnToQuestion={turnToQuestion}
                turnToAnswer={turnToAnswer}
            />
        )}
        </>
    );

}