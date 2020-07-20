import React, {useEffect} from 'react';
import styles from './OwnCards.module.css';
import {CardType} from "../../../../types/entities";
import EmptyDeck from "../../find_deck/info/emptyDeck/EmptyDeck";

type PropsType = {
    cards: Array<CardType>
    cardPackName: string
    onEditCardClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    isEditCardMode: boolean
    onCancelEditCardClick: () => void
    selectedCardId: string
    onDeleteCard: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const OwnCards: React.FC<PropsType> = React.memo(({
                                                      cards,
                                                      cardPackName,
                                                      onEditCardClick,
                                                      isEditCardMode,
                                                      onCancelEditCardClick,
                                                      selectedCardId,
                                                      onDeleteCard
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
                            (cards.map(cards => {
                                const classForItem = isEditCardMode  && cards._id === selectedCardId ? `${styles.data__item_active}` :
                                    `${styles.data__item}`
                                return (
                                    <div key={cards._id} className={classForItem} >
                                        <div className={styles.item__question}>{cards.question}</div>
                                        <div className={styles.data__border}></div>
                                        <div className={styles.item__answer}>{cards.answer}</div>
                                        <div className={styles.data__border}></div>
                                        <div className={styles.data__buttons}>
                                            {isEditCardMode && cards._id === selectedCardId &&
											<button className={styles.data__button} onClick={onCancelEditCardClick}>
												cancel
											</button>}

                                            {(isEditCardMode && cards._id !== selectedCardId || !isEditCardMode) &&
											<button className={styles.data__button}
													id={cards._id}
													onClick={onEditCardClick}
											>
												edit
											</button>}
                                            <button
                                                id={cards._id}
                                                onClick={onDeleteCard}
                                                className={styles.data__button}
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default OwnCards;




