import React from 'react';
import styles from './OwnCards.module.css';
import {CardType} from "../../../../types/entities";
import EmptyDeck from "../../find_deck/info/emptyDeck/EmptyDeck";

type PropsType = {
    cards: Array<CardType>
    cardPackName: string
    onEditCardClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    isEditCardMode: boolean
    onCancelEditCardClick: () => void
    currentCardId: string
}


const OwnCards: React.FC<PropsType> = React.memo(({
                                                      cards,
                                                      cardPackName,
                                                      onEditCardClick,
                                                      isEditCardMode,
                                                      onCancelEditCardClick,
                                                      currentCardId,
                                                  }) => {

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.deckInfo__wrap}>
                <h5 className={styles.deckInfo__title}>Selected deck: &nbsp;
                    <small className={styles.title__desc}>{cardPackName}</small></h5>
                <div className={styles.deckInfo__data}>
                    <div className={styles.data__title}>
                        <div className={styles.title__question}>Question</div>
                        <div className={styles.data__border}></div>
                        <div className={styles.title__answer}>Answer</div>
                    </div>
                    <div className={styles.data__item_box}>
                        {cards.length === 0 ? <EmptyDeck/> :

                            (cards.map(cards =>
                                <div key={cards._id} className={styles.data__item}>
                                    <div className={styles.item__question}>{cards.question}</div>
                                    <div className={styles.data__border}></div>
                                    <div className={styles.item__answer}>{cards.answer}</div>

                                    {isEditCardMode && cards._id === currentCardId &&
                                    <button onClick={onCancelEditCardClick}>
                                        cancel
                                    </button>}

                                    {(isEditCardMode && cards._id !== currentCardId || !isEditCardMode) &&
                                    <button
                                        id={cards._id}
                                        onClick={onEditCardClick}
                                    >
                                        edit
                                    </button>}
                                </div>
                            ))
                        }
                    </div>
                    {/*<div className={styles.deckInfo__button_wrap}>
                        <button className={styles.deckInfo__button}>save to favorites</button>
                    </div>*/}

                </div>
            </div>
        </div>
    )
})

export default OwnCards;




