import React from 'react';
import {repository} from "../../../helpers/repos_localStorage/Token";
import ModalWindowDeleteCard from "./ModalWindowCards/ModalWindowDeleteCard";
import ModalWindowUpdateCard from "./ModalWindowCards/ModalWindowUpdateCard";
import styles from './Cards.module.css'

type CardPropsType = {
    answer: string
    question: string
    grade: number
    shots: number
    userId: string
    onDeleteCard: (_id: string) => void
    onUpdateCard: (_id: string, question: string, answer: string) => void
    _id: string
}

const Card: React.FC<CardPropsType> = ({...props}) => {
    return (
        <>
            <div className={styles.question}>{props.question}</div>
            {/*    <div className={styles.answer}>{props.answer}</div>*/}
            <div className={styles.grade}>grade:{props.grade}</div>
            <div className={styles.shots}>shots:{props.shots}</div>

            {repository.get_Auth_id() === props.userId &&
            <div>
                <ModalWindowDeleteCard onDeleteCard={props.onDeleteCard} _id={props._id}/>
                <ModalWindowUpdateCard onUpdateCard={props.onUpdateCard} _id={props._id}/>
            </div>}
        </>
    );
};

export default Card;