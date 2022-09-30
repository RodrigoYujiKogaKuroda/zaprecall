import styled from 'styled-components';

export default function QuestionList() {

    return (
        <>
        <ClosedQuestion>
            <p>Pergunta 1</p>
        </ClosedQuestion>
        <ClosedQuestion>
            <p>Pergunta 2</p>
        </ClosedQuestion>
        <ClosedQuestion>
            <p>Pergunta 3</p>
        </ClosedQuestion>
        <ClosedQuestion>
            <p>Pergunta 4</p>
        </ClosedQuestion>
        </>
    );

}

const ClosedQuestion = styled.div`
    @media (max-width: 667px) {
        width: 300px;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        p {
            font-family: 'Recursive', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
        }
    }
`

const OpenedQuestion = styled.div`
    @media (max-width: 667px) {
        width: 300px;
        margin: 12px;
        padding: 15px;
        min-height: 100px;
        background: #FFFFD5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
  
        img {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
`