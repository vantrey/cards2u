import React from 'react';
import {CardType} from "../../../types/entities";
import Card from "./Card";
import styles from './Cards.module.css'
import {repository} from "../../../helpers/repos_localStorage/Token";
import ModalWindowAddCard from "./ModalWindowCards/ModalWindowAddCard";
import CardsHeader from "./CardsHeader";

type OwnProps = {
    cards: Array<CardType>
    onAddNewCard: (valueQuestion: string, valueAnswer: string) => void
    onDeleteCard: (card_id: string) => void
    onUpdateCard: (_id: string, question: string, answer: string) => void
    userId: string
    sortUp: (e: React.MouseEvent<HTMLButtonElement>) => void
    sortDown: (e: React.MouseEvent<HTMLButtonElement>) => void

}

const Cards: React.FC<OwnProps> = ({
                                       cards,
                                       onAddNewCard,
                                       onDeleteCard,
                                       onUpdateCard,
                                       sortUp,
                                       sortDown,
                                       userId
                                   }) => {

    const Headers = [
        {name: 'question', title: 'Question'},
      /*  {name: 'answer', title: 'Answer'},*/
        {name: 'grade', title: 'Grade'},
        {name: 'shots', title: 'Shots'},
    ]
    const cardsHeaders = Headers.map(h =>
        <div className={styles.wrapHeader} key={h.name}>
            <CardsHeader
                name={h.name}
                title={h.title}
                sortUp={sortUp}
                sortDown={sortDown}
            />
        </div>
    )

    const cardsEls = cards.map(c =>
        <div className={styles.wrapCard} key={c._id}>
            <Card
                answer={c.answer}
                question={c.question}
                grade={c.grade}
                shots={c.shots}
                userId={c.user_id}
                _id={c._id}
                onDeleteCard={onDeleteCard}
                onUpdateCard={onUpdateCard}
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
                <div className={styles.cardsHeaders}>
                    {cardsHeaders}
                </div>
                <div>
                    <div className={styles.cardsEls}>
                        {cardsEls}
                    </div>
                </div>

            </div>}

            {repository.get_Auth_id() === userId &&
            <div>
                <ModalWindowAddCard onAddNewCard={onAddNewCard}/>
            </div>}

        </div>
    );
};

export default Cards;