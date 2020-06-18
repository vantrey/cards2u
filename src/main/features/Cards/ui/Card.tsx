import React from 'react';
import {repository} from "../../../helpers/repos_localStorage/Token";
import ModalWindowDeleteCard from "./ModalWindowCards/ModalWindowDeleteCard";
import ModalWindowUpdateCard from "./ModalWindowCards/ModalWindowUpdateCard";


type CardPropsType = {
    answer: string
    question: string
    grade: number
    shots: number
    userId: string
    onDeleteCard: (_id: string) => void
    onUpdateCard: (_id: string,question: string, answer: string) => void
    _id: string
}

const Card: React.FC<CardPropsType> = ({...props}) => {
    return (
        <>
            <div>{props.question}</div>
            <div>{props.answer}</div>
            <div style={{'color': 'green'}}>grade:{props.grade}</div>
            <div style={{'color': 'blue'}}>shots:{props.shots}</div>

            {repository.get_Auth_id() === props.userId &&
            <div>
                <ModalWindowDeleteCard onDeleteCard={props.onDeleteCard} _id={props._id}/>
                <ModalWindowUpdateCard onUpdateCard={props.onUpdateCard} _id={props._id}/>
            </div>}
        </>
    );
};

export default Card;