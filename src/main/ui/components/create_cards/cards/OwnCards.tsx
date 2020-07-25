import React, {useEffect} from 'react';
import styles from './OwnCards.module.css';
import {CardType} from "../../../../types/entities";
import EmptyDeck from "../../find_deck/info/emptyDeck/EmptyDeck";
import DeckName from "./deckName/DeckName";

type PropsType = {
    cards: Array<CardType>
    cardPackName: string
    onEditCardClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    isEditCardMode: boolean
    onCancelEditCardClick: () => void
    selectedCardId: string
    onDeleteCard: (e: React.MouseEvent<HTMLButtonElement>) => void
    isCardsFetching: boolean
    updateDeckName: (newDeckName: string) => void
    isPreventFetching: boolean
}


const OwnCards: React.FC<PropsType> = React.memo(({
                                                      cards,
                                                      cardPackName,
                                                      onEditCardClick,
                                                      isEditCardMode,
                                                      onCancelEditCardClick,
                                                      selectedCardId,
                                                      onDeleteCard,
                                                      isCardsFetching,
                                                      updateDeckName,
                                                      isPreventFetching,
                                                  }) => {
    useEffect(() => {

        const currentCardElement = document.getElementById(selectedCardId + 1);

        if (isEditCardMode && currentCardElement) {
            currentCardElement.style.backgroundColor = '#1a237e';
        } else if (!isEditCardMode && currentCardElement) {
            currentCardElement.style.backgroundColor = 'transparent';
        }
        return () => {
            if (isEditCardMode && currentCardElement) {
                currentCardElement.style.backgroundColor = 'transparent';
            }
        }
    }, [selectedCardId, isEditCardMode]);

    return (
        <div className={styles.container__rightBlock}>
            <div className={styles.deckInfo__wrap}>
                <div className={styles.deckInfo__top}>
                <h5 className={styles.deckInfo__title}>Selected deck:</h5>
                    <DeckName
                        isPreventFetching={isPreventFetching}
                        cardPackName={cardPackName}
                        updateDeckName={updateDeckName}
                    />
                </div>
                <div className={styles.deckInfo__data}>
                    <div className={styles.data__title}>
                        <div className={styles.title__question}>Question</div>
                        <div className={styles.data__border}></div>
                        <div className={styles.title__answer}>Answer</div>
                    </div>
                    <div className={styles.data__item_box}>
                        {cards.length === 0 ? <EmptyDeck/> :
                            (cards.map(cards =>
                                <div key={cards._id} className={styles.data__item} id={cards._id + 1}>
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
                                            disabled={isCardsFetching}
                                            id={cards._id}
                                            onClick={onDeleteCard}
                                            className={styles.data__button}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default OwnCards;




