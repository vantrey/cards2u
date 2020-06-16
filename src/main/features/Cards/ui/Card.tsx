import React from 'react';


type CardType = {
    answer: string
    question: string
    grade: number
    shots: number
    onDeleteCard: () => void
    onUpdateCard: () => void
}

const Card: React.FC<CardType> = ({...props}) => {
    return (
        <>
            <div>{props.question}</div>
            <div>{props.answer}</div>
            <div style={{'color': 'green'}}>{props.grade}</div>
            <div style={{'color': 'blue'}}>{props.shots}</div>
            <button onClick={props.onDeleteCard}>Delete Card</button>
            <button onClick={props.onUpdateCard}>Update Card</button>
        </>
    );
};

export default Card;