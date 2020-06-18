import React from 'react';
import {CardType} from "../../../types/entities";
import Card from "./Card";
import styles from './Cards.module.css'
import {repository} from "../../../helpers/repos_localStorage/Token";
import ModalOnWindowAddCard from "./ModalWindowCards/ModalOnWindowAddCard";

type OwnProps = {
    cards: Array<CardType>
    onAddNewCard: (valueQuestion: string, valueAnswer: string) => void
    onDeleteCard: (card_id: string) => void
    onUpdateCard: (_id: string) => void
    userId: string
}

const Cards: React.FC<OwnProps> = ({
                                       cards,
                                       onAddNewCard,
                                       onDeleteCard,
                                       onUpdateCard,
                                       userId
                                   }) => {

    const cardEls = cards.map(c =>
        <div className={styles.wrapCard} key={c._id}>
            <Card
                answer={c.answer}
                question={c.question}
                grade={c.grade}
                shots={c.shots}
                userId={c.user_id}
                onDeleteCard={() => {
                    onDeleteCard(c._id)
                }}
                onUpdateCard={() => {
                    onUpdateCard(c._id)
                }}
            />
        </div>
    )

    return (

        <div className={styles.Cards}>

            {(cards.length === 0 &&
            <div
                style={{color: "red"}}>
                'there are no any cards'
            </div>) ||

            <div>
                <div className={styles.tbodyTag}>
                {cardEls}
                </div>
            </div>}

            {repository.get_Auth_id() === userId &&
            <div>
                <ModalOnWindowAddCard onAddNewCard={onAddNewCard} />
            </div>}

        </div>
    );
};

export default Cards;