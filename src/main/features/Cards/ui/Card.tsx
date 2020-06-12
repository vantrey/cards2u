import React from 'react';


type CardType = {
    answer: string,
    question: string,
    grade: number,
}

const Card: React.FC<CardType> = ({...props}) => {
    return (
        <>
            <div>{props.answer}</div>
            <div>{props.question}</div>
            <div>{props.grade}</div>
        </>
    );
};

export default Card;