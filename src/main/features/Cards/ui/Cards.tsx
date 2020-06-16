import React from 'react';
import {CardType} from "../../../types/entities";
import Card from "./Card";
import styles from './Cards.module.css'

type OwnProps = {
    isFetching: boolean,
    cards: Array<CardType>
    onAddNewCard: () => void
    onDeleteCard: (card_id:string) => void
    onUpdateCard: (_id:string) => void
}

const Cards: React.FC<OwnProps> = ({isFetching, cards, onAddNewCard, onDeleteCard, onUpdateCard}) => {

    return (
        <div className={styles.Cards}>
            <table >
                <tbody className={styles.tbodyTag}>
            {isFetching && <div>...Loading please wait</div> ||
            cards.map(c =>
                    <div className={styles.wrapCard} key={c._id}>
                    <Card
                        answer={c.answer}
                        question={c.question}
                        grade={c.grade}
                        shots={c.shots}
                        onDeleteCard={()=>{onDeleteCard(c._id)}}
                        onUpdateCard={()=>{onUpdateCard(c._id)}}
                    />
                </div>
            )
            }
                </tbody>
            </table>
            <div>
                <button onClick={onAddNewCard}>Add Card</button>
            </div>

        </div>
    );
};

export default Cards;