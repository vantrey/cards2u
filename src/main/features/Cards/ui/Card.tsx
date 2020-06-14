import React from 'react';


type CardType = {
    answer: string
    question: string
    grade: number
    onDeleteCard: () => void
    onUpdateCard: () => void
}

const Card: React.FC<CardType> = ({...props}) => {
    return (
        <>
            <div>{props.answer}</div>
            <div>{props.question}</div>
            <div>{props.grade}</div>
            <button onClick={props.onDeleteCard}>Delete Card</button>
            <button onClick={props.onUpdateCard}>Update Card</button>
        </>
    );
};

export default Card;