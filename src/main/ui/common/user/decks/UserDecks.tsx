import React from 'react';
import {CardPackType} from "../../../../types/entities";
import styles from './UserDecks.module.css';


type AvaDecksTypeProps = {
    cardPacks: CardPackType[]
    showMyDecks: () => void
    showDecks: boolean
}

const UserDecks: React.FC<AvaDecksTypeProps> = ({cardPacks, showMyDecks, showDecks}) => {

    return (
        <div className={styles.userDecks__wrap}>
            {!showDecks && <button className={styles.userDecks__button} onClick={showMyDecks}>
				<strong className={styles.button__text}>Show my decks</strong>
            </button>}
            {showDecks &&
			<>
                {cardPacks.length === 0 ?
                    // <div className={styles.userDecks__none}>You don't have a deck.</div>
                    <div className={styles.userDecks__items}>
                        <div className={styles.item}>no Name</div>
                        <div className={styles.item}>Name Name</div>
                        <div className={styles.item}>Name Native</div>
                        <div className={styles.item}>Title</div>
                        <div className={styles.item}>Title</div>
                    </div>
                    :
                    (<div>
                        <div className={styles.userDecks__have}>
                            {cardPacks.map(cardPack =>
                                <div className={styles.decks__wrap} key={cardPack._id}>
                                    <div className={styles.decks__bg}>
                                        <small className={styles.decks__title}>{cardPack.name}</small>
                                    </div>
                                    <button className={styles.decks__button}>delete</button>
                                </div>)
                            }
                        </div>
                    </div>)
                }
			</>}
        </div>
    );
};

export default UserDecks;